import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

test('legal markdown content reflects current QuidTrack positioning and pricing', () => {
  const privacy = read('src/content/quidtrack-privacy-policy.md');
  const terms = read('src/content/quidtrack-terms-of-service.md');
  const combined = `${privacy}\n${terms}`;

  assert.match(privacy, /QuidTrack is free to download — you can track up to 5 recurring outgoings/);
  assert.match(privacy, /Data collected by Google Play \(only if you upgrade to Pro\)/);
  assert.match(privacy, /Bank, PayPal, Emma, and Snoop CSV import data/);
  assert.match(privacy, /CSV files are parsed locally on your device/);
  assert.match(privacy, /PayPal Automatic Payments exports/);
  assert.match(privacy, /\*\*Raw CSV data:\*\* discarded immediately after local parsing/);
  assert.match(privacy, /RevenueCat/);
  assert.match(privacy, /Firebase \(Google Cloud\)/);
  assert.match(privacy, /QuidTrack is a tracking tool, not financial advice/);
  assert.match(terms, /## 2\. What you get — Free and Pro/);
  assert.match(terms, /### 2\.1 Free tier/);
  assert.match(terms, /### 2\.2 QuidTrack Pro \(one-time upgrade\)/);
  assert.match(terms, /### 2\.3 Pro launch pricing/);
  assert.match(terms, /£9\.99 after the first 1,000 customers/);
  assert.match(terms, /UK-focused recurring outgoings tracker/);
  assert.match(terms, /rent, mortgage, council tax, car finance, energy, broadband, insurance/);
  assert.match(terms, /Raw CSV files, balances, account numbers, and full transaction histories never leave your device/);
  assert.match(combined, /\*\*Registered office:\*\* \[REGISTERED OFFICE — to be added before launch\]/);
  assert.match(privacy, /\*\*General:\*\* hello@quidtrack\.app/);
  assert.match(privacy, /\*\*Support \/ refunds:\*\* support@quidtrack\.app/);
  assert.match(privacy, /\*\*Privacy \/ UK GDPR requests:\*\* privacy@quidtrack\.app/);
  assert.match(terms, /\*\*General queries:\*\* hello@quidtrack\.app/);
  assert.match(terms, /\*\*Support \/ refunds:\*\* support@quidtrack\.app/);
  assert.match(terms, /\*\*Privacy \/ UK GDPR:\*\* privacy@quidtrack\.app/);
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

test('homepage positions QuidTrack as freemium with manual entry trust copy', () => {
  const runtime = read('src/app/LandingRuntime.tsx');
  const landingAsset = read('public/assets/6ff52c36-9765-4a37-86d7-0dcdfbca5d1f.js');
  const combined = `${runtime}\n${landingAsset}`;

  assert.match(runtime, /Free to try\.<br\/>£4\.99 to<br\/>/);
  assert.match(runtime, /unlock forever\.<\/span>/);
  assert.match(combined, /Pay once, track every quid/);
  assert.match(combined, /Free vs Pro/);
  assert.match(combined, /Track up to 5 recurring outgoings/);
  assert.match(combined, /council tax, rent, mortgage, car finance, utilities, insurance/);
  assert.match(combined, /Manual entry/);
  assert.match(combined, /local-only/);
  assert.match(combined, /Pro \(£4\.99 launch/);
  assert.match(combined, /£9\.99 after first 1,000/);
  assert.match(combined, /PayPal \+ CSV import/);
  assert.match(combined, /CSV, PayPal \+ Emma imports/);
  assert.match(combined, /Add manually — no bank data required/);
  assert.doesNotMatch(combined, /£6\.99/);
});

test('hero headline has breathing room from phone mockups', () => {
  const css = read('src/app/globals.css');
  const runtime = read('src/app/LandingRuntime.tsx');
  const landingAsset = read('public/assets/6ff52c36-9765-4a37-86d7-0dcdfbca5d1f.js');

  assert.match(runtime, /£4\.99 to<br\/><span class=\\"accent\\">unlock forever/);
  assert.match(landingAsset, /className="hero-copy"/);
  assert.match(css, /\.hero-copy \{ position: relative; z-index: 4; min-width: 0; \}/);
  assert.match(css, /font-size: clamp\(44px, 7vw, 84px\)/);
  assert.match(css, /\.phones-stage \{[\s\S]*z-index: 1;/);
  assert.match(css, /\.phones-stage \.p-left\s+\{ transform: translate\(-30px, 20px\)/);
  assert.match(css, /@media \(min-width: 960px\) and \(max-width: 1199px\) \{\s*\.phones-stage \.p-left \{ display: none; \}\s*\}/);
});

test('landing footer exposes legal links and QuidTrack alias emails', () => {
  const footerAsset = read('public/assets/6ff52c36-9765-4a37-86d7-0dcdfbca5d1f.js');

  assert.match(footerAsset, /href="\/privacy"/);
  assert.match(footerAsset, /href="\/terms"/);
  assert.match(footerAsset, /mailto:hello@quidtrack\.app/);
  assert.match(footerAsset, /mailto:support@quidtrack\.app/);
  assert.match(footerAsset, /mailto:privacy@quidtrack\.app/);
  assert.doesNotMatch(footerAsset, /guitarfreak2689@gmail\.com/);
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
