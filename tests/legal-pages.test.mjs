import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

test('legal markdown content is synced to the current Ltd launch copy', () => {
  const privacy = read('src/content/quidtrack-privacy-policy.md');
  const terms = read('src/content/quidtrack-terms-of-service.md');
  const combined = `${privacy}\n${terms}`;

  assert.match(privacy, /^# QuidTrack Privacy Policy/m);
  assert.match(terms, /^# QuidTrack Terms of Service/m);
  assert.match(
    privacy,
    /ALARA Studios Ltd, a company registered in England and Wales \(Company Number 16985196\)/
  );
  assert.match(
    terms,
    /ALARA Studios Ltd[\s\S]*a company registered in England and Wales \(Company Number 16985196\)/
  );
  assert.match(combined, /\*\*Registered office:\*\* \[REGISTERED OFFICE — to be added before launch\]/);
  assert.match(privacy, /\*\*Contact:\*\* privacy@quidtrack\.app/);
  assert.match(privacy, /\*\*General:\*\* hello@quidtrack\.app/);
  assert.match(privacy, /\*\*Privacy \/ UK GDPR requests:\*\* privacy@quidtrack\.app/);
  assert.match(terms, /\*\*General queries:\*\* hello@quidtrack\.app/);
  assert.match(terms, /\*\*Support \/ refunds:\*\* support@quidtrack\.app/);
  assert.match(terms, /\*\*Privacy \/ UK GDPR:\*\* privacy@quidtrack\.app/);
  assert.match(
    combined,
    /QuidTrack is a product of ALARA Studios Ltd, a company registered in England and Wales \(Company Number 16985196\)\./
  );
  assert.doesNotMatch(combined, /sole trader/i);
  assert.doesNotMatch(combined, /guitarfreak/i);
});

test('privacy and terms pages render accordion markdown with noindex metadata', () => {
  const privacyPage = read('src/app/privacy/page.tsx');
  const termsPage = read('src/app/terms/page.tsx');
  const component = read('src/app/legal/LegalMarkdownAccordions.tsx');

  assert.match(privacyPage, /title:\s*["']QuidTrack — Privacy Policy["']/);
  assert.match(termsPage, /title:\s*["']QuidTrack — Terms of Service["']/);
  assert.match(privacyPage, /robots:\s*{\s*index:\s*false/);
  assert.match(termsPage, /robots:\s*{\s*index:\s*false/);
  assert.match(privacyPage, /LegalMarkdownAccordions/);
  assert.match(termsPage, /LegalMarkdownAccordions/);
  assert.match(component, /section-\$\{number\}-\$\{slugify/);
  assert.match(component, /window\.location\.hash/);
  assert.match(component, /aria-expanded/);
});

test('landing footer exposes legal and contact links', () => {
  const footerAsset = read('public/assets/6ff52c36-9765-4a37-86d7-0dcdfbca5d1f.js');

  assert.match(footerAsset, /href="\/privacy"/);
  assert.match(footerAsset, /href="\/terms"/);
  assert.match(footerAsset, /mailto:guitarfreak2689@gmail\.com/);
});

test('homepage section spacing is tightened without changing the hero', () => {
  const css = read('src/app/globals.css');

  assert.match(css, /\.hero \{ position: relative; padding: 48px 0 0;/);
  assert.match(css, /@media \(min-width: 768px\) \{ \.hero \{ padding: 72px 0 0; \} \}/);
  assert.match(css, /@media \(min-width: 768px\) \{ section \{ padding: 96px 0; \} \}/);
  assert.match(css, /\.pricing-drama \{ text-align: center; padding: 96px 0;/);
  assert.match(css, /\.ios-signup \{ padding: 96px 0; \}/);
  assert.match(css, /@media \(max-width: 767px\)[\s\S]*\.ios-signup \{ padding: 64px 0; \}/);
});
