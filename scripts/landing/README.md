# Landing page generator

Generates the static locale landing pages in `public/{locale}/index.html` from one
template plus a translation file. Zero dependencies, not part of the Astro build.

```bash
node scripts/landing/build.js
```

Then commit the regenerated `public/{locale}/index.html` files — their output is
checked in, the generator is not run at deploy time.

## Files

| File | Role |
|---|---|
| `build.js` | the generator; owns the locale list, hreflang map, and native language names |
| `template.html` | the page, with `{{t.key.path}}` / `{{tj.key.path}}` placeholders |
| `translations.json` | per-locale strings, including `meta.title` / `meta.description` |
| `translations-en.txt` | flat English reference copy, for handing to translators |

## Why these live outside `public/`

Astro copies everything in `public/` verbatim into the deployed site. While these
four files sat there, Vercel served them — `volcast.app/template.html` returned the
raw template with unsubstituted `{{...}}` placeholders and a canonical pointing at
the literal string `{{BASE_URL}}/{{LOCALE}}/`, and `build.js` plus the translation
files were fetchable as well. Bing Webmaster Tools flagged the resulting crawl waste
under "limited crawl capacity". Moving them here removes them from the public
surface entirely, which is a stronger fix than a `robots.txt` rule.

## Editing copy

Change `translations.json`, never the generated `public/{locale}/index.html` — the
next run overwrites it.

`meta.title` and `meta.description` are the search snippet. Keep titles unique per
locale (two locales sharing a title is what Bing reports as duplicate titles) and
descriptions in the 120–155 character range. Below roughly 100 characters Bing
reports them as too short; above ~160 Google truncates them.

The English description sets the pattern the other locales follow — value
proposition, then "no inverter login", then the data/physics differentiator:

> Predict your solar production with an advanced physical engine. No inverter login
> required. Satellite data + physics = precision.

## Share card (og:image)

`og/card.html` is the 1200×630 Open Graph card, rendered to
`public/img/og-landing.png` by `og/render.mjs`. Every landing page references it,
including the `/` shim.

```bash
# needs Playwright, which this repo does not depend on — run from a checkout
# that has it, e.g. the FBScraper repo:
cd ../FBScraper && node ../volcast-landing/scripts/landing/og/render.mjs
```

The PNG is committed, so the renderer only runs when the card changes. Failing
that, open `og/card.html` in a browser sized to exactly 1200×630 and screenshot it.

Notes if you edit the card:

- It is designed to be read at ~40% scale, because that is how wide Facebook
  renders it in-feed. Nothing carrying meaning sits below 22px.
- The device panel windows in on `public/img/en/forecast.png` via the `--shot-*`
  custom properties; that source has its own marketing header baked into the top
  third, which is why the card crops to the phone rather than using the whole file.
- Keep the grain layer at `opacity: 0` unless a variant needs it. Per-pixel noise
  is incompressible — it took the PNG from 202KB to 547KB for no visible gain.
- Do not reuse `og-default.png` here. That is the blog's card and its strapline
  reads "Solar Forecast for Home Assistant", which tells the average PV owner in a
  Facebook group that the app is not for them.

The card is English-only and shared by all locales. The generator is parameterised
enough that per-locale cards are feasible — there are localised screenshots under
`public/img/<lang>/` and localised hero copy in `translations.json` — but the URL
that actually gets shared is the `/` shim, which serves one image regardless of the
viewer's language.

## Adding a locale

1. Add the code to `LOCALES` in `build.js`.
2. Add its BCP 47 tag to `HREFLANG` and its endonym to `NATIVE_NAMES`.
3. Add the locale block to `translations.json` (missing keys fall back to English
   with a warning).
4. Run the generator, then add the new URL to `public/sitemap-landing.xml`.
