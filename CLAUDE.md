# Logi AI legal site

Public legal documents at https://legal.logicnodes.ai. Read `README.md` first: how to run
it, how pages work and the URL rule.

## Rules

- **The repository is public.** Never commit secrets, internal notes, customer names or
  unpublished drafts. History is public too.
- **URLs are a contract.** A page's URL is `/{en,da}/<file name>/`, with a trailing slash.
  Customers, contracts, DPAs and `security.txt` link to these URLs; never rename or delete
  a content file without a redirect.
- **Both languages, always.** A change to a document in `content/en/` is made to its Danish
  counterpart in `content/da/` in the same commit, and `lang_equivalent` links the two.
  Update `last_updated` in the front matter and the document's change log when the text
  changes.
- **Content is Markdown; keep it that way.** Editors change `content/` only. Inline HTML is
  fine where Markdown cannot express it (the cards on the index pages). Liquid supports
  only `page.*` with the `date` filter and the `relative_url` filter.
- **Heading text is part of the URL.** Heading ids come from heading text, and people link
  to `#anchors`; reword a heading only knowing that its anchor changes.
- **Look stays in `src/styles/`.** Colours and fonts live only in `tokens.css`; reference
  them as `var(--color-…)`. Tailwind is wired without preflight and scans `src/` only;
  `legal.css` is unlayered, so it wins over utilities.
- pnpm only (no npm, yarn or bun lockfiles).

## Verify

`pnpm build` must prerender every page (it fails on an error), and `pnpm typecheck` must
pass. A change to the rendering (`src/lib/`) or the layout is checked against the previous
build's output, not by eye: `pnpm compare <old build dir>` diffs URLs, visible text, ids
and links.
