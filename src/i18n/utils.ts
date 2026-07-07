import { ui, defaultLang, type Lang } from './ui';

/** Sprache aus der URL ableiten (/en/... → 'en', sonst Default 'de'). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** Übersetzungsfunktion für eine Sprache (Fallback: Default-Sprache, dann Key). */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key] ?? key;
  };
}

/**
 * Einen internen Pfad für die Zielsprache bauen.
 * Default-Sprache: ohne Präfix. Andere: mit /<lang>-Präfix.
 * z.B. localizePath('/blog', 'en') → '/en/blog'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === '/' ? '' : clean}` || `/${lang}`;
}

/**
 * Aktuellen Pfad ohne Sprach-Präfix zurückgeben (für den Sprachumschalter,
 * um dieselbe Seite in der anderen Sprache zu verlinken).
 * z.B. '/en/blog' → '/blog', '/blog' → '/blog'
 */
export function stripLangFromPath(pathname: string): string {
  const [, maybeLang, ...rest] = pathname.split('/');
  if (maybeLang in ui && maybeLang !== defaultLang) {
    return '/' + rest.join('/');
  }
  return pathname;
}

/**
 * true, wenn die Seite in beiden Sprachen existiert. Wird vom Sprachumschalter
 * genutzt, damit er auf reinen DE-Seiten (Konto, Signup, 404) nicht auf eine
 * nicht existierende /en-Route zeigt. Muster beziehen sich auf den Pfad OHNE
 * Sprach-Präfix.
 */
export function isTranslated(pathname: string): boolean {
  const base = stripLangFromPath(pathname).replace(/\/+$/, '') || '/';
  if (base === '/') return true;
  return [
    /^\/module(\/[^/]+)?$/,
    /^\/branchen(\/[^/]+)?$/,
    /^\/glossar$/,
    /^\/blog(\/.+)?$/,
    /^\/(impressum|datenschutz|barrierefreiheit)$/,
  ].some((re) => re.test(base));
}
