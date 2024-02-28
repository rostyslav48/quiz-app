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
        id: 'question-2',
        sequenceNumber: 2,
        type: 'single-select',
        locale: {
          en: 'What is class in the CSS?',
          de: 'Was ist eine Klasse in CSS?',
          es: '¿Qué es una clase en CSS?',
          fr: "Qu'est-ce que la classe en CSS?",
        },
        description: {
          en: 'Choose the correct answer',
          de: 'Wählen Sie die richtige Antwort aus',
          es: 'Elige la respuesta correcta',
          fr: 'Choisissez la réponse correcte',
        },
        options: [
          {
            id: 'option-1',
            locale: {
              en: 'A dog',
              de: 'Ein Hund',
              es: 'Un perro',
              fr: 'Un chien',
            },
          },
          {
            id: 'option-2',
            locale: {
              en: 'A unique styling feature',
              de: 'Ein einzigartiges Styling-Merkmal',
              es: 'Una característica de estilo única',
              fr: 'Une caractéristique de style unique',
            },
          },
          {
            id: 'option-3',
            locale: {
              en: "I don't know",
              de: 'Ich weiß es nicht',
              es: 'No lo sé',
              fr: 'Je ne sais pas',
            },
          },
          {
            id: 'option-4',
            locale: {
              en: 'A part of programming language',
              de: 'Ein Teil der Programmiersprache',
              es: 'Una parte del lenguaje de programación',
              fr: 'Une partie du langage de programmation',
            },
          },
        ],
      },
    ],
  },
];
