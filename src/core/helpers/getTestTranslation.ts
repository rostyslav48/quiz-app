import { getTestLanguage } from '.';
import { Locale } from '../enums';
import { LocalizedString } from '../types/quiz-data.type';

export const getTestTranslation = (locale: LocalizedString) => {
  const currentLanguage = getTestLanguage();

  return locale[currentLanguage] ?? locale[Locale.English];
};
