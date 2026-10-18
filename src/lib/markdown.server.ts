// Markdown → HTML, compatible with the Jekyll/kramdown output the site was built with
// before (kramdown's GFM parser with Jekyll's defaults). Runs at build time only.
import MarkdownIt from "markdown-it";
import type StateBlock from "markdown-it/lib/rules_block/state_block.mjs";
import anchor from "markdown-it-anchor";

/**
 * Header ids as kramdown's GFM parser makes them: lowercase, every character
 * that is not a letter, mark, digit, `_`, `-`, space or tab removed, spaces
 * and tabs turned into `-` ("Vilkår & Betingelser" → "vilkår--betingelser").
 * Repeats get `-1`, `-2`, … (markdown-it-anchor's uniqueSlug).
 */
function kramdownSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{Alphabetic}\p{M}\p{Nd}\p{Pc}\- \t]/gu, "")
    .replace(/[ \t]/g, "-");
}

// kramdown's HTML_SPAN_ELEMENTS: everything else that starts a line is a block element.
const SPAN_ELEMENTS = new Set(
  "a abbr acronym b big bdo br button cite code del dfn em i img input ins kbd label mark option q rb rbc rp rt rtc ruby samp select small span strike strong sub sup textarea tt var".split(
    " ",
  ),
);
const VOID_ELEMENTS = new Set(
  "area base br col embed hr img input link meta source track wbr".split(" "),
);

/**
 * kramdown's block HTML: an element that starts a line runs to its matching
 * closing tag, blank lines and indentation included, and its content is passed
 * through untouched. CommonMark instead ends an HTML block at the first blank
 * line, which turns the indented cards on the index pages into code blocks.
 */
function kramdownHtmlBlock(
  state: StateBlock,
  startLine: number,
  endLine: number,
  silent: boolean,
): boolean {
  const lineText = (line: number) =>
    state.src.slice(state.bMarks[line] + state.tShift[line], state.eMarks[line]);
  if (state.sCount[startLine] - state.blkIndent >= 4) return false;

  const open = /^<([a-zA-Z][a-zA-Z0-9-]*)[\s/>]/.exec(lineText(startLine) + " ");
  if (!open) return false;
  const tag = open[1].toLowerCase();
  if (SPAN_ELEMENTS.has(tag) || VOID_ELEMENTS.has(tag)) return false;

  const tagRe = new RegExp(`<(/?)${tag}(?=[\\s/>])[^>]*?(/?)>`, "gi");
  let depth = 0;
  let line = startLine;
  for (; line < endLine; line++) {
    for (const m of lineText(line).matchAll(tagRe)) {
      if (m[1]) depth--;
      else if (!m[2]) depth++;
    }
    if (depth <= 0) break;
  }
  if (depth > 0) return false; // never closed: leave it to the CommonMark rule
  if (silent) return true;

  const token = state.push("html_block", "", 0);
  token.map = [startLine, line + 1];
  token.content = state.getLines(startLine, line + 1, state.blkIndent, true);
  state.line = line + 1;
  return true;
}

const md = new MarkdownIt({
  html: true,
  typographer: true, // kramdown's smart quotes
  quotes: "“”‘’",
})
  // markdown-it's "replacements" would also turn "(c)" into "©"; kramdown does not.
  .disable("replacements")
  .use(anchor, { slugify: kramdownSlug, tabIndex: false });

md.block.ruler.before("html_block", "kramdown_html_block", kramdownHtmlBlock, {
  alt: ["paragraph", "reference", "blockquote"],
});

// A table sits in a box that scrolls sideways on its own at phone width.
md.renderer.rules.table_open = () => '<div class="table-scroll">\n<table>\n';
md.renderer.rules.table_close = () => "</table>\n</div>\n";

export function renderMarkdown(source: string): string {
  return md.render(source, {});
}
