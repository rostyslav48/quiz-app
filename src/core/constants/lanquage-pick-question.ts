import { Question } from 'core/types/quiz-data.type';

export const languagePickQuestion: Question = {
  id: 'test-locale',
  type: 'single-select',
  sequenceNumber: 1,
  locale: {
    en: 'What is your preferred language?',
  },
  description: {
    en: 'Choose language',
  },
  options: [
    {
      id: 'en',
      locale: {
        en: 'English',
      },
      isCorrect: true,
    },
    {
      id: 'fr',
      locale: {
        en: 'French',
      },
      isCorrect: true,
    },
    {
      id: 'de',
      locale: {
        en: 'German',
      },
      isCorrect: true,
    },
    {
      id: 'es',
      locale: {
        en: 'Spanish',
      },
      isCorrect: true,
    },
  ],
};
