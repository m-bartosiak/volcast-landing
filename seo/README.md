# SEO data snapshots

Machine-readable extracts from the Search Console data collected by the scraper
project (`FBScraper`, Postgres on the NAS). They live here so that checks running
in CI can reason about search performance **without reaching the database** — the
database listens on `127.0.0.1` behind Tailscale and a GitHub Action will never
see it.

Nothing in this directory is served. Astro only copies `public/`.

## `pages-with-clicks.json`

Every page that earned at least one click in the last 28 days, with the window it
was measured over.

```json
{
  "window": { "source": "google-search-console", "anchor": "2026-08-11",
              "days": 28, "start": "2026-07-15", "end": "2026-08-11" },
  "totals": { "pages": 19, "clicks": 107 },
  "pages":  [ { "path": "/en/", "clicks": 47, "impressions": 152 }, ... ]
}
```

Its job is to be the input for the guard that refuses to let a pull request put
`noindex` on a page that is earning traffic. That is the worst thing this pipeline
could do — it is silent, it is invisible in a diff that looks like a one-line
metadata change, and by the time it shows up in a report the ranking is gone.

`anchor` is the newest day that actually has data, not today. Search Console runs
two to three days behind, so a window measured from today compares a part-empty
period against a full one and reports a collapse every time it is refreshed.

There is deliberately no `generated_at`. The window **is** the timestamp, and
leaving the wall clock out means a weekly refresh that finds the same numbers
produces no diff at all.

### Regenerating

Written by the weekly SEO job on the NAS. By hand:

```bash
ssh nas "docker exec -i volcast-dashboard-db psql -qtA -U metabase -d volcast_dashboard" \
  < query.sql > seo/pages-with-clicks.json
```

### Reading it honestly

The corpus is small — 19 pages carry all 107 clicks. A page missing from this
list has not been proven worthless; it may simply have had a quiet month, and
Google withholds the query for 57–73% of impressions anyway. Absence from the
list is permission for a check to proceed, not evidence that a page is dead.
