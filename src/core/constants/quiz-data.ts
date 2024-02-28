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

      {
        id: 'question-3',
        sequenceNumber: 3,
        type: 'multiple-select',
        locale: {
          en: 'What is class in the CSS MULTI?',
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

      {
        id: 'question-4',
        sequenceNumber: 4,
        type: 'single-select-image',
        locale: {
          en: 'What is your gender?',
          de: 'Was ist dein Geschlecht?',
          fr: 'Quel est votre sexe?',
          es: '¿Cuál es tu género?',
        },
        description: {
          en: 'Please share how do you identify yourself',
          de: 'Bitte teilen Sie mit, wie Sie sich identifizieren',
          fr: 'Veuillez partager comment vous vous identifiez',
          es: 'Por favor, comparte cómo te identificas',
        },
        options: [
          {
            id: 'option-1',
            locale: {
              en: 'Female',
              de: 'Weiblich',
              fr: 'Femme',
              es: 'Mujer',
            },
            img: '/img/questions-img/gender-select/female.webp',
          },
          {
            id: 'option-2',
            locale: {
              en: 'Male',
              de: 'Männlich',
              fr: 'Homme',
              es: 'Hombre',
            },
            img: '/img/questions-img/gender-select/male.webp',
          },
          {
            id: 'option-3',
            locale: {
              en: 'Other',
              de: 'Andere',
              fr: 'Autre',
              es: 'Otro',
            },
            img: '/img/questions-img/gender-select/other.webp',
          },
        ],
      },

      {
        id: 'question-5',
        sequenceNumber: 5,
        type: 'bubble',
        locale: {
          en: 'What are your favorite topics?',
          de: 'Was sind deine Lieblingsthemen?',
          fr: 'Quels sont vos sujets préférés?',
          es: '¿Cuáles son tus temas favoritos?',
        },
        description: {
          en: 'Choose up to 3 topics you like',
          de: 'Wählen Sie bis zu 3 Themen aus, die Ihnen gefallen',
          fr: "Choisissez jusqu'à 3 sujets que vous aimez",
          es: 'Elige hasta 3 temas que te gusten',
        },
        options: [
          {
            id: 'option-1',
            locale: {
              en: 'Werewolf',
              de: 'Weiblich',
              fr: 'Femme',
              es: 'Mujer',
            },
            img: '/img/questions-img/favorite-topic/werwolf.webp',
          },
          {
            id: 'option-2',
            locale: {
              en: 'Action',
              de: 'Männlich',
              fr: 'Homme',
              es: 'Hombre',
            },
            img: '/img/questions-img/favorite-topic/action.webp',
          },
          {
            id: 'option-3',
            locale: {
              en: 'Royal obsession',
              de: 'Königliche Besessenheit',
              fr: 'Obsession royale',
              es: 'Obsesión real',
            },
            img: '/img/questions-img/favorite-topic/royal-obsession.webp',
          },
          {
            id: 'option-4',
            locale: {
              en: 'Billionaires',
              de: 'Milliardäre',
              fr: 'Milliardaires',
              es: 'Billonarios',
            },
            img: '/img/questions-img/favorite-topic/billionaires.webp',
          },
          {
            id: 'option-5',
            locale: {
              en: 'Romance',
              de: 'Romantik',
              fr: 'Romance',
              es: 'Romance',
            },
            img: '/img/questions-img/favorite-topic/romance.webp',
          },
          {
            id: 'option-6',
            locale: {
              en: 'Young Adult',
              de: 'Jugendliche',
              fr: 'Jeunes Adultes',
              es: 'Joven Adulto',
            },
            img: '/img/questions-img/favorite-topic/young-adult.webp',
          },
          {
            id: 'option-7',
            locale: {
              en: 'Bad Boy',
              de: 'Schlechter Junge',
              fr: 'Mauvais Garçon',
              es: 'Chico Malo',
            },
            img: '/img/questions-img/favorite-topic/bad-boy.webp',
          },
        ],
      },
    ],
  },
];
