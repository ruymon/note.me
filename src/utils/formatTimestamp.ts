import { formatDistance } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale'
import { useTranslation } from 'react-i18next';

interface LanguageDictionary {
  [key: string]: Locale;
}

export function formatTimestamp(time: number) { 
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const languageDictionary: LanguageDictionary = {
    'pt-BR': ptBR,
    'en-US': enUS,
  }

  const formatedTime = formatDistance(new Date(time), new Date(), { addSuffix: true, locale: languageDictionary[currentLanguage] });

  return formatedTime;
}