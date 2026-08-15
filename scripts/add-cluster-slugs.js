#!/usr/bin/env node
/**
 * Dopisuje slugi języka do TRANSLATION_CLUSTERS. Uruchom: node scripts/add-cluster-slugs.js <lang>
 *
 * Osiemnaście z trzydziestu jeden postów paruje się między językami przez tę mapę,
 * a nie przez `translationKey` we frontmatterze (patrz komentarz w check-translations.js).
 * Dla nich wiersz w mapie JEST parowaniem — bez niego post istnieje, ale nie ma ani
 * jednego alternatu hreflang i nie pojawia się w przełączniku języka.
 *
 * Slug bierzemy z realnie istniejących plików, nie z planu — plan mógł się rozjechać
 * z tym, co napisał autor.
 */
import fs from 'node:fs';
import path from 'node:path';

const lang = process.argv[2];
if (!lang) {
  console.error('Użycie: node scripts/add-cluster-slugs.js <lang>');
  process.exit(1);
}

const ROOT = process.cwd();
const TS = path.join(ROOT, 'src', 'data', 'translations.ts');
const BLOG = path.join(ROOT, 'src', 'content', 'blog');

// Pliki w danym języku BEZ translationKey — czyli te, które muszą parować się mapą
const candidates = new Map();
for (const f of fs.readdirSync(path.join(BLOG, lang)).filter((x) => x.endsWith('.md'))) {
  const text = fs.readFileSync(path.join(BLOG, lang, f), 'utf8');
  if (/^translationKey:/m.test(text)) continue;
  candidates.set(f.replace(/\.md$/, ''), text);
}

// Mapa: slug EN -> slug w naszym języku. Wyprowadzana z pliku przydziału, bo to
// jedyne miejsce wiążące jedno z drugim.
const assign = JSON.parse(fs.readFileSync(
  `C:/Users/yakon/AppData/Local/Temp/claude/c--Users-yakon-Documents-Volter-Volcast/645c7348-c567-4789-a7b8-697fe7a3ab60/scratchpad/assign-${lang}.json`,
  'utf8'
));
const pairs = assign.batches.flat().filter((p) => p.pairing === 'cluster');

let src = fs.readFileSync(TS, 'utf8');
const added = [];
const missing = [];
const orphaned = [];

for (const p of pairs) {
  if (!candidates.has(p.slug)) {
    missing.push(`${p.slug} (z ${p.enSlug}) — brak pliku albo plik ma translationKey, którego mieć nie powinien`);
    continue;
  }
  candidates.delete(p.slug);

  // Znajdź wiersz po slugu angielskim i dopisz nasz język przed zamykającym nawiasem
  const rowRe = new RegExp(`(\\{\\s*en:\\s*'${p.enSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[^}]*?)(\\s*\\})`);
  const m = rowRe.exec(src);
  if (!m) {
    missing.push(`${p.enSlug} — nie znaleziono wiersza w TRANSLATION_CLUSTERS`);
    continue;
  }
  if (new RegExp(`\\b${lang}:\\s*'`).test(m[1])) {
    continue; // już jest
  }
  src = src.replace(rowRe, `$1, ${lang}: '${p.slug}'$2`);
  added.push(`${p.enSlug} -> ${p.slug}`);
}

for (const left of candidates.keys()) {
  orphaned.push(`${left} — plik bez translationKey i bez wpisu w przydziale; zostanie bez hreflang`);
}

if (missing.length || orphaned.length) {
  console.error('\nBŁĄD — mapa klastrów nie domyka się:\n');
  for (const x of [...missing, ...orphaned]) console.error('  • ' + x);
  process.exit(1);
}

fs.writeFileSync(TS, src, 'utf8');
console.log(`OK — dopisano ${added.length} slugów '${lang}' do TRANSLATION_CLUSTERS:`);
for (const a of added) console.log('  ' + a);
