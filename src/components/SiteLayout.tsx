import type { ReactNode } from "react";

import type { Locale } from "../lib/urls";

declare const __BUILD_YEAR__: string;

export const SITE_TITLE = "LogicNodes Legal";
const SITE_DESCRIPTION = "Legal documentation and policies";

type Props = {
  locale: Locale;
  /** The locale's front page (`/en/`, `/da/`) has no breadcrumb. */
  isHome: boolean;
  /** The same page in the other locale; falls back to the other locale's front page. */
  langEquivalent: string | null;
  /** The page's `<main>`. */
  children: ReactNode;
};

/**
 * Header and footer around every page. "Logi AI" is a text wordmark until the
 * redesigned logo exists; the comparison script leaves `.wordmark` out of the
 * text it compares.
 */
export function SiteLayout({ locale, isHome, langEquivalent, children }: Props) {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="topbar-brand">
            <a href={`/${locale}/`} className="wordmark">
              Logi AI
            </a>
            <span className="topbar-divider" aria-hidden="true" />
            <div className="topbar-title">
              <h1>{SITE_TITLE}</h1>
              <p>{SITE_DESCRIPTION}</p>
            </div>
          </div>
          <div className="topbar-nav">
            {!isHome && (
              <nav className="breadcrumb">
                <a href={`/${locale}/`}>
                  <ChevronLeft />
                  {locale === "da" ? "Hjem" : "Home"}
                </a>
              </nav>
            )}
            <LanguageSelector locale={locale} langEquivalent={langEquivalent} />
          </div>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-col footer-col--left">
            <a href="https://logiai.dk" className="wordmark">
              Logi AI
            </a>
          </div>
          <div className="footer-col footer-col--center">
            <p className="footer-copy">
              Copyright &copy; {__BUILD_YEAR__} &ndash; Logi. Alle rettigheder reserveret
            </p>
          </div>
          <div className="footer-col footer-col--right">
            <a href="mailto:legal@logicnodes.ai" className="footer-contact">
              legal@logicnodes.ai
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function LanguageSelector({ locale, langEquivalent }: Pick<Props, "locale" | "langEquivalent">) {
  const other = locale === "en" ? "da" : "en";
  const otherLink = (
    <a href={langEquivalent ?? `/${other}/`} className="lang-link">
      {other.toUpperCase()}
    </a>
  );
  const current = <span className="lang-link active">{locale.toUpperCase()}</span>;
  const separator = <span className="separator">|</span>;
  return (
    <div className="language-selector">
      {locale === "en" ? current : otherLink}
      {separator}
      {locale === "en" ? otherLink : current}
    </div>
  );
}

/** Heroicons 24 outline chevron-left, as the platform's back crumb. */
function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}
