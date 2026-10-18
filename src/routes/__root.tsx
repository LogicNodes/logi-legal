import { HeadContent, Scripts, createRootRoute, useParams } from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "https://logiai.dk/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
  const { lang } = useParams({ strict: false });
  return (
    <html lang={lang === "da" ? "da" : "en"}>
      <head>
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
    <main className="container">
      <article className="legal-document">
        <h1>404</h1>
        <p>
          This page does not exist. <a href="/en/">Go to the legal documents</a>.
        </p>
      </article>
    </main>
  );
}
