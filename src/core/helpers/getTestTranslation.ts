import { Locale, StorageKeys } from '../enums';
import { LocalizedString } from '../types/quiz-data.type';

export const getTestTranslation = (locale: LocalizedString) => {
  const testRaw = localStorage.getItem(StorageKeys.Test);
  const test = testRaw ? JSON.parse(testRaw) : {};

  const currentLanguage = test[StorageKeys.TestLocale]
    ? test[StorageKeys.TestLocale].selectedOptions[0].id
    : Locale.English;

  return locale[currentLanguage] ?? locale[Locale.English];
};
