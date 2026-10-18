import type { Page } from "../lib/pages";
import { SiteLayout } from "./SiteLayout";

/** One content page: a legal document in its card, or the bare index page. */
export function PageView({ page }: { page: Page }) {
  const content = { __html: page.html };
  return (
    <SiteLayout
      locale={page.locale}
      isHome={page.slug === "index"}
      langEquivalent={page.langEquivalent}
    >
      {page.layout === "legal" ? (
        <main className="sheet">
          <article className="legal-document" dangerouslySetInnerHTML={content} />
        </main>
      ) : (
        <main className="sheet" dangerouslySetInnerHTML={content} />
      )}
    </SiteLayout>
  );
}
