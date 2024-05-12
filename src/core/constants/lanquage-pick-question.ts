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
    },
    {
      id: 'fr',
      locale: {
        en: 'French',
      },
    },
    {
      id: 'de',
      locale: {
        en: 'German',
      },
    },
    {
      id: 'es',
      locale: {
        en: 'Spanish',
      },
    },
    {
      id: 'ua',
      locale: {
        en: 'Ukrainian',
      },
    },
  ],
};
