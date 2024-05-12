import { QuizData } from '../types/quiz-data.type';

export const quizData: QuizData[] = [
  {
    id: 'quiz-1',
    img: '/img/info-about-yourself-test.webp',
    title: {
      en: 'Learn more about yourself',
      de: 'Erfahren Sie mehr über sich selbst',
      es: 'Aprende más sobre ti mismo',
      fr: 'Apprenez-en davantage sur vous-même',
      ua: 'Дізнайтеся більше про себе',
    },
    description: {
      en: 'Embark on a journey of self-discovery with our captivating quiz! Explore your personality, preferences, and passions to uncover fascinating insights about yourself. Answer thought-provoking questions to reveal the essence of who you are. Gain newfound clarity and insight as you navigate through this enlightening experience. Take our "Discover Yourself" quiz today and unlock the door to self-discovery!',
      de: 'Begib dich auf eine Reise der Selbstentdeckung mit unserem fesselnden Quiz! Erforsche deine Persönlichkeit, Vorlieben und Leidenschaften, um faszinierende Einblicke in dich selbst zu entdecken. Beantworte nachdenkliche Fragen, um das Wesen dessen zu enthüllen, wer du bist. Gewinne neue Klarheit und Einsicht, während du durch diese erleuchtende Erfahrung navigierst. Mach heute unser "Entdecke dich selbst" Quiz und öffne die Tür zur Selbstentdeckung!',
      es: '¡Embárcate en un viaje de autodescubrimiento con nuestro cautivador quiz! Explora tu personalidad, preferencias y pasiones para descubrir fascinantes percepciones sobre ti mismo. Responde preguntas estimulantes para revelar la esencia de quién eres. Obtén una nueva claridad y comprensión mientras navegas por esta experiencia iluminadora. ¡Haz nuestro quiz "Descubre tú mismo" hoy y abre la puerta al autodescubrimiento!',
      fr: `Embarquez dans un voyage de découverte de soi avec notre quiz captivant ! Explorez votre personnalité, vos préférences et vos passions pour découvrir des insights fascinants sur vous-même. Répondez à des questions stimulantes pour révéler l'essence de qui vous êtes. Acquérez une clarté et une compréhension nouvelles alors que vous naviguez à travers cette expérience enrichissante. Prenez notre quiz "Découvrez-vous" aujourd'hui et ouvrez la porte à la découverte de soi !`,
      ua: 'Відправтеся в подорож самопізнання за допомогою нашої захоплюючої вікторини! Дослідіть свою особистість, уподобання та пристрасті, щоб відкрити захоплюючу інформацію про себе. Дайте відповіді на питання, які спонукають до роздумів, щоб розкрити сутність того, ким ви є. Отримайте нову ясність і розуміння під час навігації цим повчальним досвідом. Пройдіть сьогодні нашу вікторину «Відкрийте себе» та відкрийте двері до самопізнання!',
    },
    questions: [
      {
        id: 'question-2',
        sequenceNumber: 2,
        type: 'single-select-image',
        locale: {
          en: 'What is your gender?',
          de: 'Was ist dein Geschlecht?',
          fr: 'Quel est votre sexe?',
          es: '¿Cuál es tu género?',
          ua: 'Який ваш стать?',
        },
        description: {
          en: 'Please share how do you identify yourself',
          de: 'Bitte teilen Sie mit, wie Sie sich identifizieren',
          fr: 'Veuillez partager comment vous vous identifiez',
          es: 'Por favor, comparte cómo te identificas',
          ua: 'Будь ласка, поділіться, як ви себе ідентифікуєте',
        },
        options: [
          {
            id: 'option-1',
            locale: {
              en: 'Female',
              de: 'Weiblich',
              fr: 'Femme',
              es: 'Mujer',
              ua: 'Жінка',
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
              ua: 'Чоловік',
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
              ua: 'Інший',
            },
            img: '/img/questions-img/gender-select/other.webp',
          },
        ],
      },

      {
        id: 'question-3',
        sequenceNumber: 3,
        type: 'single-select',
        locale: {
          en: 'What is your age?',
          de: 'Wie alt bist du?',
          es: '¿Cuál es tu edad?',
          fr: 'Quel âge as-tu ?',
          ua: 'Скільки вам років?',
        },
        description: {
          en: 'Choose the most appropriate age',
          de: 'Wählen Sie das passendste Alter aus',
          es: 'Elige la edad más apropiada',
          fr: "Choisissez l'âge le plus approprié",
          ua: 'Виберіть найбільш відповідний вік',
        },
        options: [
          {
            id: 'option-1',
            locale: {
              en: '18-20 years',
              de: '18-20 Jahre',
              es: '18-20 años',
              fr: '18-20 ans',
              ua: '18-20 років',
            },
          },
          {
            id: 'option-2',
            locale: {
              en: '30-39 years',
              de: '30-39 Jahre',
              es: '30-39 años',
              fr: '30-39 ans',
              ua: '30-39 років',
            },
          },
          {
            id: 'option-3',
            locale: {
              en: '40-49 years',
              de: '40-49 Jahre',
              es: '40-49 años',
              fr: '40-49 ans',
              ua: '40-49 років',
            },
          },
          {
            id: 'option-4',
            locale: {
              en: '50+',
              de: '50+',
              es: '50+',
              fr: '50+',
              ua: '50+',
            },
          },
        ],
      },

      {
        id: 'question-4',
        sequenceNumber: 4,
        type: 'multiple-select',
        locale: {
          en: 'What do you hate the most in a book?',
          de: 'Was magst du am wenigsten in einem Buch?',
          es: '¿Qué es lo que más odias en un libro?',
          fr: "Qu'est-ce que tu détestes le plus dans un livre ?",
          ua: 'Що ви найбільше ненавидите в книгах',
        },
        description: {
          en: 'Choose a few things',
          de: 'Wähle ein paar Dinge aus',
          es: 'Elige algunas cosas',
          fr: 'Choisissez quelques choses',
          ua: 'Виберіть кілька речей',
        },
        options: [
          {
            id: 'option-1',
            locale: {
              en: 'Lack of logic',
              de: 'Mangel an Logik',
              es: 'Falta de lógica',
              fr: 'Manque de logique',
              ua: 'Відсутність логіки',
            },
          },
          {
            id: 'option-2',
            locale: {
              en: 'A slow speed',
              de: 'Eine langsame Geschwindigkeit',
              es: 'Una velocidad lenta',
              fr: 'Une vitesse lente',
              ua: 'Повільний темп',
            },
          },
          {
            id: 'option-3',
            locale: {
              en: 'Lack of humor',
              de: 'Fehlender Humor',
              es: 'Falta de humor',
              fr: "Manque d'humour",
              ua: 'Відсутність гумору',
            },
          },
          {
            id: 'option-4',
            locale: {
              en: 'Way too generic ending',
              de: 'Viel zu generisches Ende',
              es: 'Final demasiado genérico',
              fr: 'Fin beaucoup trop générique',
              ua: 'Занадто загальний кінець',
            },
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
          ua: 'Які ваші улюблені теми?',
        },
        description: {
          en: 'Choose up to 3 topics you like',
          de: 'Wählen Sie bis zu 3 Themen aus, die Ihnen gefallen',
          fr: "Choisissez jusqu'à 3 sujets que vous aimez",
          es: 'Elige hasta 3 temas que te gusten',
          ua: 'Виберіть до 3 тем, які вам подобаються',
        },
        options: [
          {
            id: 'option-1',
            locale: {
              en: 'Werwolf',
              de: 'Weiblich',
              fr: 'Femme',
              es: 'Mujer',
              ua: 'Вервольф',
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
              ua: 'Гра',
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
              ua: 'Захоплення королями',
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
              ua: 'Мільярдери',
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
              ua: 'Романтика',
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
              ua: 'Молодь',
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
              ua: 'Поганий хлопець',
            },
            img: '/img/questions-img/favorite-topic/bad-boy.webp',
          },
        ],
      },
    ],
  },

  {
    id: 'quiz-2',
    img: '/img/eyes-test.webp',
    title: {
      en: 'What creature you are?',
      de: 'Welche Kreatur bist du?',
      es: '¿Qué criatura eres?',
      fr: 'Quelle créature es-tu ?',
      ua: 'Яка тварина ти?',
    },
    description: {
      en: 'This test is here only to demonstrate how multiple tests would look like',
      de: 'Dieser Test dient nur dazu, zu zeigen, wie mehrere Tests aussehen würden',
      es: 'Esta prueba está aquí solo para demostrar cómo se verían múltiples pruebas',
      fr: 'Ce test est là uniquement pour montrer à quoi ressembleraient plusieurs tests',
      ua: 'Цей тест тут лише для демонстрації того, як виглядатимуть кілька тестів',
    },
    questions: [
      {
        id: 'question-2',
        sequenceNumber: 2,
        type: 'single-select',
        locale: {
          en: 'Finish the test!',
          de: 'Beende den Test!',
          es: '¡Termina la prueba!',
          fr: 'Terminez le test',
          ua: 'Завершити тест',
        },
        description: {
          en: 'Please share how do you identify yourself',
          de: 'Bitte teilen Sie mit, wie Sie sich identifizieren',
          fr: 'Veuillez partager comment vous vous identifiez',
          es: 'Por favor, comparte cómo te identificas',
          ua: 'Будь ласка, поділіться, як ви себе ідентифікуєте',
        },
        options: [
          {
            id: 'option-1',
            locale: {
              en: 'Finish the test!',
              de: 'Beende den Test!',
              es: '¡Termina la prueba!',
              fr: 'Terminez le test !',
              ua: 'Завершити тест',
            },
          },
        ],
      },
    ],
  },
];
