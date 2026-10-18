import { readdirSync } from "node:fs";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { LOCALES, pagePath } from "./src/lib/urls.ts";

// Every Markdown file under content/{locale}/ is one page; all of them are prerendered.
const pages = LOCALES.flatMap((locale) =>
  readdirSync(`content/${locale}`)
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({ path: pagePath(locale, file.replace(/\.md$/, "")) })),
);

export default defineConfig({
  define: {
    // The footer prints the year the site was built, as the Jekyll site did.
    __BUILD_YEAR__: JSON.stringify(String(new Date().getFullYear())),
  },
  plugins: [
    tanstackStart({
      pages: [{ path: "/" }, ...pages],
      // Only the pages listed above: content links without a trailing slash
      // (lang_equivalent) would otherwise be crawled as duplicates.
      prerender: { enabled: true, crawlLinks: false },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
