import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    injects: { [key: string]: string | number } | null = null
  ): string {
    let text: string = ui[lang][key] || ui[defaultLang][key] || key;

    if (injects) {
      for (const [key, value] of Object.entries(injects)) {
        text = text.replace(`{${key}}`, value.toString());
      }
    }

    return text;
  };
}

console.log();
