import { ui } from './en';                                                               
import { ui as esUi } from './es';
                                                                                          
const translations = { en: ui, es: esUi };
                                                                                          
export function useTranslations(lang: 'en' | 'es') {                                     
  return function t(key: keyof typeof ui): string {
    return translations[lang][key] ?? translations['en'][key];                           
  };                                                                                     
}