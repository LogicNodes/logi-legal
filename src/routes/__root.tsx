import { HeadContent, Scripts, createRootRoute, useParams } from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "color-scheme", content: "light dark" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

// The product tokens switch to dark under `.dark`; this follows the system
// setting, before first paint and when it changes. Without JavaScript the page
// stays light.
const FOLLOW_SYSTEM_THEME = `(function(){var m=window.matchMedia("(prefers-color-scheme: dark)");function a(){document.documentElement.classList.toggle("dark",m.matches)}a();m.addEventListener("change",a)})()`;

function RootDocument({ children }: { children: ReactNode }) {
  const { lang } = useParams({ strict: false });
  return (
    // The theme script sets the class before React hydrates.
    <html lang={lang === "da" ? "da" : "en"} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: FOLLOW_SYSTEM_THEME }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="sheet">
      <article className="legal-document">
        <h1>404</h1>
        <p>
          This page does not exist. <a href="/en/">Go to the legal documents</a>.
        </p>
      </article>
    </main>
  );
}
