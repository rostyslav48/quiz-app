import { StorageKeys, Locale } from 'core/enums';

export const getTestLanguage = () => {
  const testRaw = localStorage.getItem(StorageKeys.Test);
  const test = testRaw ? JSON.parse(testRaw) : {};

  const currentLanguage = test[StorageKeys.TestLocale]
    ? test[StorageKeys.TestLocale].selectedOptions[0].id
    : Locale.English;

  return currentLanguage;
};
