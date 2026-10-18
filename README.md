# Logi AI legal site

The legal documents of Logi AI at **https://legal.logicnodes.ai**: terms, privacy policy,
DPA, sub-processors, security and the rest, in English (`/en/`) and Danish (`/da/`).

**This repository is public.** Everything committed here, history included, is readable
by anyone. No secrets, internal notes or drafts that are not ready to be published.

## Run it

```bash
pnpm install
pnpm dev        # dev server; edits to content/ show on reload
pnpm build      # prerenders every page to dist/client/
pnpm typecheck
```

pnpm only. The stack is the company website's: TanStack Start, Vite, React, Tailwind 4.

`pnpm build` writes plain static files: `dist/client/en/terms/index.html` and so on, plus
`/assets/`. Any static file server can serve that folder; `vercel.json` configures Vercel.

## Add or edit a page

Every page is one Markdown file:

| File | URL |
| --- | --- |
| `content/en/terms.md` | `/en/terms/` |
| `content/da/vilkaar.md` | `/da/vilkaar/` |
| `content/en/index.md` | `/en/` (the document index) |

The file starts with front matter:

```yaml
---
layout: legal                  # legal = document card; default = bare page (the index pages)
title: Terms & Conditions      # browser tab: "<title> - LogicNodes Legal"
lang: en                       # en or da, same as the folder
lang_equivalent: /da/vilkaar/  # the same page in the other language (the EN | DA switch)
last_updated: 2026-10-15
---
```

The body is Markdown with inline HTML, as before. Two Liquid expressions are supported:

- `{{ page.last_updated | date: "%B %-d, %Y" }}` (English) and
  `{{ page.last_updated | date: "%-d. %B %Y" }}` (Danish) print the date; month names
  follow the page's language.
- `{{ '/en/terms/' | relative_url }}` prints the path as it is.

Headings get ids automatically (`## 2. Konti & Adgang` → `#2-konti--adgang`), so links to
`/da/vilkaar/#2-konti--adgang` keep working as long as the heading text stays the same.

To add a document, add it in **both** languages, point each one's `lang_equivalent` at the
other, and add a card for it to `content/en/index.md` and `content/da/index.md`. A new file
is a new page; nothing else needs registering.

## URLs

- Every page URL ends with a slash: `/en/terms/`. Without the slash the host redirects;
  the `.html` forms do not exist.
- A page's URL is its file name. Renaming a file changes a public URL that customers,
  contracts and other sites link to: don't, unless the old URL is redirected.
- Danish pages have Danish slugs (`/da/vilkaar/`, not `/da/terms/`).
- Files in `public/` are served as they are: `/en/pgp.txt`, `/.well-known/security.txt`.

## Layout

```
content/{en,da}/*.md     the pages
public/                  files served unchanged
src/lib/                 Markdown rendering (content.server.ts, markdown.server.ts)
src/components/          header, footer and page layout
src/routes/              /, /$lang/, /$lang/$slug/
src/styles/tokens.css    every colour and font, in one place
src/styles/legal.css     the stylesheet
scripts/                 comparison with the old Jekyll build
```

The Markdown is rendered at build time to match what Jekyll (kramdown) produced: smart
quotes, kramdown's heading ids, and HTML blocks that may contain blank lines.

## Moving off Jekyll

Until cutover, the live site is GitHub Pages building the Jekyll site from `main`. This
React version lives on the `react` branch. At cutover:

1. Port any content changes made on `main` since the branch was cut.
2. Build both and compare: a Jekyll build of `main` (`bundle install && bundle exec jekyll
   build`, in a copy of `main`), then `pnpm build && pnpm compare <that copy>/_site`. It
   checks URLs, visible text, element ids and links, and lists intended differences.
3. Create the Vercel project from this repository and move the domain
   `legal.logicnodes.ai` to it. The `CNAME` file was GitHub Pages configuration and is gone
   on this branch; GitHub Pages must be switched off when the domain moves.
