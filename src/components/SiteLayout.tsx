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

/** Header and footer around every page. */
export function SiteLayout({ locale, isHome, langEquivalent, children }: Props) {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>{SITE_TITLE}</h1>
              <p>{SITE_DESCRIPTION}</p>
            </div>
            <div className="header-nav">
              {!isHome && (
                <nav className="breadcrumb">
                  {locale === "da" ? <a href="/da/">Hjem</a> : <a href="/en/">Home</a>}
                </nav>
              )}
              <LanguageSelector locale={locale} langEquivalent={langEquivalent} />
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-col footer-col--left">
              <a href="https://logiai.dk">
                <img
                  src="https://logiai.dk/images/logo/logo-white.png"
                  alt="Logi"
                  className="footer-logo"
                />
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
