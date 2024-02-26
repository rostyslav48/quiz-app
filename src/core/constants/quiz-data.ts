import { QuizData } from '../types/quiz-data.type';

export const quizData: QuizData[] = [
  {
    id: 'quiz-1',
    img: '/img/css-test-img.webp',
    title: {
      en: 'CSS knowledge test',
      de: 'CSS Kenntnistest',
      es: 'Prueba de conocimientos de CSS',
      fr: 'Test de connaissances en CSS',
    },
    description: {
      en: 'Test your CSS expertise with our CSS Knowledge Test. Assess your skills in selectors, properties, layout, and responsiveness. Multiple-choice and coding challenges included',
      de: 'Testen Sie Ihr CSS-Wissen mit unserem CSS-Kenntnistest. Beurteilen Sie Ihre Fähigkeiten in Selektoren, Eigenschaften, Layout und Responsivität. Multiple-Choice- und Coding-Herausforderungen inklusive.',
      es: 'Evalúa tu experiencia en CSS con nuestro Test de Conocimientos de CSS. Evalúa tus habilidades en selectores, propiedades, diseño y capacidad de respuesta. Incluye desafíos de opción múltiple y codificación.',
      fe: 'Testez vos compétences en CSS avec notre Test de Connaissances en CSS. Évaluez vos compétences en sélecteurs, propriétés, mise en page et réactivité. Comprend des défis à choix multiples et de codage.',
    },
    questions: [
      {
        id: '1',
        sequenceNumber: 1,
        type: 'single-select',
        locale: {
          en: 'How old are you?',
          de: 'Кіко тобі років?',
        },
        description: {
          en: 'Choose one correct answer',
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
