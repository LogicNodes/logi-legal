// Compares this site's build with the Jekyll build it replaced, page by page.
//
//   node scripts/compare-with-jekyll.mjs <jekyll _site dir> [new build dir = dist/client]
//
// Checks: (a) the same URLs exist, (b) the visible text of every page (title,
// header, main, footer; whitespace-normalised) is identical, (c) the same element
// ids exist, (d) every internal link and #anchor resolves to a built page/id.
// Intended differences, reported but not failed:
// - Danish month names in the "last updated" line of Danish pages (Jekyll printed
//   English ones);
// - signature lines: kramdown turned "_______________________________" into five bold
//   "__" and one "_"; they now render as written;
// - links that were already broken in the Jekyll build.
// Exits 1 on any other difference.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import * as cheerio from "cheerio";

const [oldDir, newDir = "dist/client"] = process.argv.slice(2);
if (!oldDir) {
  console.error("usage: node scripts/compare-with-jekyll.mjs <jekyll _site dir> [new dir]");
  process.exit(2);
}
const SITE_ORIGIN = "https://legal.logicnodes.ai";

// Files that are expected to exist in only one of the two builds.
const ONLY_OLD = new Set(["/style.css", "/CNAME"]); // CSS now under /assets/, CNAME is GitHub Pages config
const ONLY_NEW = [/^\/assets\//, /^\/\.well-known\/security\.txt$/]; // Jekyll skipped dot-directories

const MONTHS_DA = {
  January: "januar", February: "februar", March: "marts", April: "april", May: "maj", June: "juni",
  July: "juli", August: "august", September: "september", October: "oktober", November: "november",
  December: "december",
};

function urls(dir) {
  const out = new Map(); // url -> file
  (function walk(d) {
    for (const name of readdirSync(d)) {
      const file = join(d, name);
      if (statSync(file).isDirectory()) walk(file);
      else {
        const url = "/" + relative(dir, file).replaceAll("\\", "/");
        out.set(url.endsWith("/index.html") ? url.slice(0, -"index.html".length) : url, file);
      }
    }
  })(dir);
  return out;
}

const norm = (s) => s.replace(/\s+/g, " ").trim();

// The page content (title, main) is compared as text. The header and footer are
// compared with a break between text nodes: their elements are blocks and flex
// items, so the whitespace JSX leaves out between them was never rendered.
function visibleText($) {
  $("script, style, noscript").remove();
  const textNodes = (sel) =>
    $(sel).find("*").addBack().contents().filter((_, n) => n.type === "text").map((_, n) => n.data).get();
  return [
    `[title] ${norm($("title").text())}`,
    `[header] ${norm(textNodes("header").join(" "))}`,
    `[main] ${norm($("main").text())}`,
    `[footer] ${norm(textNodes("footer").join(" "))}`,
  ].join("\n");
}

const ids = ($) => $("[id]").map((_, el) => $(el).attr("id")).get().sort();

function firstDifference(a, b) {
  let i = 0;
  while (i < a.length && a[i] === b[i]) i++;
  return `at ${i}:\n      old: …${a.slice(Math.max(0, i - 60), i + 60)}…\n      new: …${b.slice(Math.max(0, i - 60), i + 60)}…`;
}

const oldUrls = urls(oldDir);
const newUrls = urls(newDir);
const failures = [];
const intended = [];

// (a) URL set
for (const url of oldUrls.keys()) {
  if (newUrls.has(url)) continue;
  (ONLY_OLD.has(url) ? intended : failures).push(`(a) only in Jekyll build: ${url}`);
}
for (const url of newUrls.keys()) {
  if (oldUrls.has(url)) continue;
  if (!ONLY_NEW.some((re) => re.test(url))) failures.push(`(a) only in new build: ${url}`);
}
if (newUrls.has("/.well-known/security.txt") && !oldUrls.has("/.well-known/security.txt"))
  intended.push("(a) /.well-known/security.txt is now served (Jekyll skipped the dot-directory)");

// (b), (c) per page
const pages = [...oldUrls.keys()].filter((u) => u.endsWith("/") && newUrls.has(u));
const parsedNew = new Map();
let monthChanges = 0;
for (const url of pages) {
  const $old = cheerio.load(readFileSync(oldUrls.get(url), "utf8"));
  const $new = cheerio.load(readFileSync(newUrls.get(url), "utf8"));
  parsedNew.set(url, $new);

  if (url.startsWith("/da/")) {
    $old(".last-updated").each((_, el) => {
      const text = $old(el).text();
      const danish = text.replace(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/g, (m) => MONTHS_DA[m]);
      if (danish !== text) {
        monthChanges++;
        intended.push(`(b) ${url}: "${norm(text)}" → "${norm(danish)}"`);
        $old(el).text(danish);
      }
    });
  }

  let [oldText, newText] = [visibleText($old), visibleText($new)];
  if (oldText !== newText) {
    const lines = (t) => t.replace(/_{3,}/g, "___");
    if (lines(oldText) === lines(newText)) {
      const count = (newText.match(/_{3,}/g) ?? []).length;
      intended.push(`(b) ${url}: ${count} signature lines render as written (${oldText.match(/_{3,}/)[0].length} → ${newText.match(/_{3,}/)[0].length} underscores)`);
    } else failures.push(`(b) text differs on ${url} ${firstDifference(oldText, newText)}`);
  }

  const [oldIds, newIds] = [ids($old), ids($new)];
  if (oldIds.join("\n") !== newIds.join("\n")) {
    const missing = oldIds.filter((id) => !newIds.includes(id));
    const extra = newIds.filter((id) => !oldIds.includes(id));
    failures.push(`(c) ids differ on ${url}: missing [${missing.join(", ")}] extra [${extra.join(", ")}]`);
  }
}

// Non-HTML files must be byte-identical.
for (const url of oldUrls.keys()) {
  if (url.endsWith("/") || !newUrls.has(url)) continue;
  if (!readFileSync(oldUrls.get(url)).equals(readFileSync(newUrls.get(url))))
    failures.push(`(a) file contents differ: ${url}`);
}

// (d) internal links
function resolveLink(fromUrl, href, builtUrls = newUrls, parsed = parsedNew) {
  let target;
  try {
    target = new URL(href, SITE_ORIGIN + fromUrl);
  } catch {
    return `unparseable href`;
  }
  if (target.origin !== SITE_ORIGIN) return null; // external
  let path = decodeURIComponent(target.pathname);
  // A slashless page URL redirects to the slashed one (GitHub Pages and Vercel alike).
  if (!builtUrls.has(path) && builtUrls.has(path + "/")) path += "/";
  if (!builtUrls.has(path)) return `no page at ${path}`;
  const hash = decodeURIComponent(target.hash.slice(1));
  if (hash) {
    const $target = parsed.get(path);
    if (!$target || !$target(`[id="${hash.replaceAll('"', '\\"')}"]`).length) return `no #${hash} on ${path}`;
  }
  return null;
}
const parsedOld = new Map(pages.map((url) => [url, cheerio.load(readFileSync(oldUrls.get(url), "utf8"))]));
const brokenBefore = new Set();
for (const [url, $] of parsedOld)
  $("a[href]").each((_, el) => {
    if (resolveLink(url, $(el).attr("href"), oldUrls, parsedOld)) brokenBefore.add(`${url} ${$(el).attr("href")}`);
  });
let linkCount = 0;
for (const [url, $] of parsedNew) {
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (/^(mailto|tel):/.test(href)) return;
    linkCount++;
    const problem = resolveLink(url, href);
    if (!problem) return;
    if (brokenBefore.has(`${url} ${href}`)) intended.push(`(d) ${url}: link ${href} → ${problem} (already broken in the Jekyll build)`);
    else failures.push(`(d) ${url}: link ${href} → ${problem}`);
  });
}

console.log(`URLs: ${oldUrls.size} in Jekyll build, ${newUrls.size} in new build; ${pages.length} pages compared`);
console.log(`Links checked: ${linkCount}; Danish month names changed: ${monthChanges}`);
console.log(`\nIntended differences (${intended.length}):`);
for (const line of intended) console.log("  " + line);
console.log(`\nUnexpected differences (${failures.length}):`);
for (const line of failures) console.log("  " + line);
process.exit(failures.length ? 1 : 0);
