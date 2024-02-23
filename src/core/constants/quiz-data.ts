import { QuizData } from '../types/quiz-data.type';

export const quizData: QuizData[] = [
  {
    id: 'quiz-1',
    type: 'rows',
    isMultipleAnswers: false,
    title: {
      en: 'The best quiz to test your skills',
      de: 'Найкраща вікторина щоб перевірити твої навички',
    },
    questions: [
      {
        id: 'question-1',
        sequenceNumber: 1,
        locale: {
          en: 'How old are you?',
          de: 'Кіко тобі років?',
        },
        options: [
          {
            id: 'option-1',
            locale: {
              en: 'eleven',
              de: 'Одинадцять',
            },
            isCorrect: false,
          },
          {
            id: 'option-2',
            locale: {
              en: 'eleven',
              de: 'Одинадцять',
            },
            isCorrect: true,
          },
          {
            id: 'option-3',
            locale: {
              en: 'eleven',
              de: 'Одинадцять',
            },
            isCorrect: false,
          },
          {
            id: 'option-4',
            locale: {
              en: 'eleven',
              de: 'Одинадцять',
            },
            isCorrect: false,
          },
        ],
      },
    ],
  },
];
