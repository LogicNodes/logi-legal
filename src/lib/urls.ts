export const LOCALES = ["en", "da"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** The URL of a page: `/en/` for a locale's index.md, `/en/terms/` for terms.md. */
export function pagePath(locale: Locale, slug: string): string {
  return slug === "index" ? `/${locale}/` : `/${locale}/${slug}/`;
}
