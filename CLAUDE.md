# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static single-page press kit / EPK for the band **Orangu Thangs** (oranguthangs.com), hosted on GitHub Pages. No build step, no package manager, no framework — edit files and push.

## Local preview

There is no dev server configured. Use any static file server, for example:

```bash
python -m http.server 8080
# then open http://localhost:8080
```

## Deploying

Push to the `main` branch — GitHub Pages deploys automatically.

## Architecture

Three files do everything:

- **`index.html`** — the entire page. All content lives here.
- **`css/styles.css`** — all styling. Theme variables are at the top in `:root`.
- **`js/language-switcher.js`** — toggles the active language on page load/change.

### Bilingual content

Language switching is purely CSS-driven: elements with `data-lang="nl"` or `data-lang="en"` are shown/hidden via the `.active` class. Dutch (`nl`) is the default — Dutch elements have `class="active"` in the HTML source. The JS in `language-switcher.js` adds/removes `.active` on `<select>` change.

When adding new translatable content, always add **both** a `data-lang="nl" class="active"` and a `data-lang="en"` version.

### Gig list

Gigs live in `.gigs-table`, a CSS Grid (`grid-template-columns: 1fr 2fr`). Each `.gig-row` uses `display: contents` so its children become direct grid items. Past gigs get `class="gig-row past"`, which applies strikethrough and reduced opacity via `.past .gig-date, .past .gig-info`.

### Design tokens

All colours and font families are CSS custom properties in `:root`:
- `--main-bg-color`: `#191919` (near-black background)
- `--text-color` / `--header-color`: `#FF7006` (orange)
- `--header-font-family`: Bebas Neue
- `--font-family`: Poppins
- `--drop-shadow-size`: `10px` — used for the offset box-shadow on `.section` cards
