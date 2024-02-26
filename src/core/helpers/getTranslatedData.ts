import { Locale, StorageKeys } from '../enums';
import { LocalizedString } from '../types/quiz-data.type';

export const getTranslatedData = (locale: LocalizedString) => {
  const currentLanguage =
    localStorage.getItem(StorageKeys.Locale) ?? Locale.English;

  return locale[currentLanguage];
};
