import test from 'node:test';
import assert from 'node:assert/strict';
import { getLanguage, languagePath, translate, languages } from '../src/i18n.js';
import { translations } from '../src/translations.js';
import { pagePaths, projectPaths, sitePath, routePath } from '../src/routing.js';

test('English is the default; only supported explicit language choices are accepted', () => {
  for (const search of ['', '?lang=fr', '?lang=__proto__', '?lang=constructor']) assert.equal(getLanguage(search), 'en');
  for (const lang of Object.keys(languages)) assert.equal(getLanguage(`?lang=${lang}`), lang);
});

test('localized links preserve routes, queries and anchors under both site bases', () => {
  for (const base of ['/', '/tirsu-portfolio/']) {
    for (const path of ['/', ...pagePaths, ...projectPaths]) {
      for (const lang of Object.keys(languages)) {
        const url = new URL(sitePath(languagePath(path, lang), base), 'https://example.com');
        assert.equal(routePath(url.pathname, base), path);
        assert.equal(getLanguage(url.search), lang);
      }
    }
  }
  assert.equal(languagePath('/cv?ref=portfolio#experience', 'de'), '/cv?ref=portfolio&lang=de#experience');
  assert.equal(languagePath('/cv?lang=ru#profile', 'en'), '/cv#profile');
  assert.equal(languagePath('/?lang=ru', 'ro'), '/?lang=ro');
});

test('language choices never alter public assets, downloads or external links', () => {
  for (const path of ['/artworks/level-auto/merch-2000.webp', '/font-licenses/inter-OFL.txt', '/favicon.svg', 'mailto:hello@example.com', 'https://example.com', '//example.com', '#main']) {
    assert.equal(languagePath(path, 'ru'), path);
  }
});

test('all translation catalogs have the same keys and nonempty values', () => {
  const keys = Object.keys(translations.ro).sort();
  for (const lang of ['ro', 'de', 'ru']) {
    assert.deepEqual(Object.keys(translations[lang]).sort(), keys);
    for (const [source, translation] of Object.entries(translations[lang])) {
      assert(translation.trim(), `${lang}: ${source}`);
      assert.equal(translate(source, lang), translation);
    }
  }
});

test('captions, next project labels and title punctuation translate without losing numbering', () => {
  assert.equal(translate('  02 / The rear view  ', 'de'), '  02 / Die Heckansicht  ');
  assert.equal(translate('Next project / 03', 'ro'), 'Proiectul următor / 03');
  assert.equal(translate('Experience.', 'ru'), 'Опыт работы.');
  assert.equal(translate('Level Auto Rental', 'ru'), 'Level Auto Rental');
  assert.equal(translate('Home', 'en'), 'Home');
});
