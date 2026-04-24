import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

test('legal markdown content is stored in the landing app', () => {
  const privacy = read('src/content/quidtrack-privacy-policy.md');
  const terms = read('src/content/quidtrack-terms-of-service.md');

  assert.match(privacy, /^# QuidTrack Privacy Policy/m);
  assert.match(terms, /^# QuidTrack Terms of Service/m);
  assert.match(privacy, /ALARA Studios \(Alan Newton, sole trader, Birmingham, UK\)/);
  assert.match(terms, /guitarfreak2689@gmail\.com/);
  assert.doesNotMatch(terms, /\.\/quidtrack-privacy-policy\.md/);
  assert.match(terms, /\[Privacy Policy\]\(\/privacy\)/);
});

test('privacy and terms pages render markdown with noindex metadata', () => {
  const privacyPage = read('src/app/privacy/page.tsx');
  const termsPage = read('src/app/terms/page.tsx');

  assert.match(privacyPage, /title:\s*["']QuidTrack — Privacy Policy["']/);
  assert.match(termsPage, /title:\s*["']QuidTrack — Terms of Service["']/);
  assert.match(privacyPage, /robots:\s*{\s*index:\s*false/);
  assert.match(termsPage, /robots:\s*{\s*index:\s*false/);
  assert.match(privacyPage, /ReactMarkdown/);
  assert.match(termsPage, /ReactMarkdown/);
});

test('landing footer exposes legal and contact links', () => {
  const footerAsset = read('public/assets/6ff52c36-9765-4a37-86d7-0dcdfbca5d1f.js');

  assert.match(footerAsset, /href="\/privacy"/);
  assert.match(footerAsset, /href="\/terms"/);
  assert.match(footerAsset, /mailto:guitarfreak2689@gmail\.com/);
});
