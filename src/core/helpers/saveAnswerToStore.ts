import { StorageKeys } from 'core/enums';
import { Option, LocalizedString } from 'core/types/quiz-data.type';
import { getTestTranslation } from '.';

export const saveAnswerToStore = (
  questionId: string,
  questionLocale: LocalizedString,
  selectedOptions: Option[],
) => {
  const testRaw = localStorage.getItem(StorageKeys.Test);
  const test = testRaw ? JSON.parse(testRaw) : {};

  const preparedData = {
    question: getTestTranslation(questionLocale),
    selectedOptions: selectedOptions.map((option) => ({
      id: option.id,
      answer: getTestTranslation(option.locale),
      isCorrect: option.isCorrect,
    })),
  };

  test[questionId] = preparedData;
  localStorage.setItem(StorageKeys.Test, JSON.stringify(test));
};
