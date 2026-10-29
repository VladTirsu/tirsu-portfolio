import { translations } from './translations.js';
import { pagePaths, projectPaths } from './routing.js';

export const languages = { en: 'English', ro: 'Română', de: 'Deutsch', ru: 'Русский' };
export function getLanguage(search = '') {
  const candidate = new URLSearchParams(search).get('lang');
  return Object.hasOwn(languages, candidate) ? candidate : 'en';
}

// Only page links carry the language. Images, downloads and external URLs stay intact.
export function languagePath(path, language = 'en') {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const url = new URL(path, 'https://portfolio.invalid');
  const route = url.pathname.replace(/\/+$/, '') || '/';
  if (!['/', ...pagePaths, ...projectPaths].includes(route)) return path;
  if (language === 'en') url.searchParams.delete('lang');
  else url.searchParams.set('lang', language);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function translate(value, language = 'en') {
  if (language === 'en' || typeof value !== 'string') return value;
  const dictionary = translations[language];
  if (!dictionary) return value;
  const text = value.trim();
  let translated = dictionary[text];
  if (!translated && text.endsWith('.')) {
    const base = dictionary[text.slice(0, -1)];
    if (base) translated = `${base}.`;
  }
  // Captions and section numbers remain stable in every language.
  if (!translated) {
    const numbered = text.match(/^(\d+\s*[/—]\s*)(.*)$/);
    if (numbered && dictionary[numbered[2]]) translated = numbered[1] + dictionary[numbered[2]];
    const suffix = text.match(/^(.*?)(\s*\/\s*\d+)$/);
    if (!translated && suffix && dictionary[suffix[1]]) translated = dictionary[suffix[1]] + suffix[2];
  }
  return translated ? value.replace(text, translated) : value;
}

export function localizeElement(root, language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) walker.currentNode.nodeValue = translate(walker.currentNode.nodeValue, language);
  for (const element of root.querySelectorAll('[alt], [aria-label], [title]')) {
    for (const attribute of ['alt', 'aria-label', 'title']) {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, translate(element.getAttribute(attribute), language));
    }
  }
}
