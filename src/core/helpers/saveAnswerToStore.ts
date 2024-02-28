import { StorageKeys } from 'core/enums';
import { Option, LocalizedString } from 'core/types';
import { getTestTranslation } from '.';
import { Test } from 'core/types';

export const saveAnswerToStore = (
  questionId: string,
  questionLocale: LocalizedString,
  questionType: string,
  selectedOptions: Option[],
) => {
  const testRaw = localStorage.getItem(StorageKeys.Test);
  const test: Test = testRaw ? JSON.parse(testRaw) : {};

  const preparedData = {
    question: getTestTranslation(questionLocale),
    questionType,
    selectedOptions: selectedOptions.map(({ locale }) =>
      getTestTranslation(locale),
    ),
  };

  test[questionId] = preparedData;
  localStorage.setItem(StorageKeys.Test, JSON.stringify(test));
};
