export type LocalizedString = {
  [key: string]: string;
};

export interface Option {
  id: string;
  locale: LocalizedString;
  isCorrect: boolean;
  img?: string;
}

export interface Question {
  id: string;
  locale: LocalizedString;
  options: Option[];
}

export interface QuizData {
  id: string;
  type: string;
  isMultipleAnswers: boolean;
  title: LocalizedString;
  questions: Question[];
}
