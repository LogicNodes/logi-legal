// Reads content/{locale}/*.md and renders a page the way Jekyll did: front matter,
// then Liquid, then Markdown. Build time only (prerender and the dev server).
import matter from "gray-matter";
import { Liquid } from "liquidjs";

import { renderMarkdown } from "./markdown.server";
import type { Page } from "./pages";
import { isLocale, type Locale } from "./urls";

const sources = import.meta.glob<string>("/content/*/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// The Liquid the pages use: `{{ page.last_updated | date: "…" }}` and
// `{{ '/x/' | relative_url }}`. Month names follow the page's locale.
const liquids: Record<Locale, Liquid> = {
  en: new Liquid({ locale: "en-US", timezoneOffset: 0 }),
  da: new Liquid({ locale: "da-DK", timezoneOffset: 0 }),
};
for (const liquid of Object.values(liquids)) {
  liquid.registerFilter("relative_url", (path: string) => path); // the site has no baseurl
}

export function loadPage(locale: string, slug: string): Page | null {
  if (!isLocale(locale) || !/^[a-z0-9-]+$/.test(slug)) return null;
  const source = sources[`/content/${locale}/${slug}.md`];
  if (source === undefined) return null;

  const { data, content } = matter(source);
  const markdown = liquids[locale].parseAndRenderSync(content, { page: data });
  return {
    locale,
    slug,
    title: String(data.title ?? ""),
    layout: data.layout === "legal" ? "legal" : "default",
    langEquivalent: data.lang_equivalent ? String(data.lang_equivalent) : null,
    html: renderMarkdown(markdown),
  };
}
