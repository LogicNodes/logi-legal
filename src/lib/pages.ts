import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

import type { Locale } from "./urls";

export type Page = {
  locale: Locale;
  /** `index` for the locale's front page. */
  slug: string;
  title: string;
  /** `legal` wraps the content in the document card; `default` is the bare index page. */
  layout: "legal" | "default";
  /** The same page in the other locale (`lang_equivalent`), if it has one. */
  langEquivalent: string | null;
  html: string;
};

/** A content page, rendered on the server (at build time when prerendering). */
export const getPage = createServerFn({ method: "GET" })
  .validator((input: { locale: string; slug: string }) => input)
  .handler(async ({ data }): Promise<Page> => {
    const { loadPage } = await import("./content.server");
    const page = loadPage(data.locale, data.slug);
    if (!page) throw notFound();
    return page;
  });
