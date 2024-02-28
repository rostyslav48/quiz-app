export type LocalizedString = {
  [key: string]: string;
};

export interface Option {
  id: string;
  locale: LocalizedString;
  img?: string;
}

export interface Question {
  id: string;
  sequenceNumber: number;
  locale: LocalizedString;
  description: LocalizedString;
  options: Option[];
  type: string;
}

export interface QuizData {
  id: string;
  img: string;
  title: LocalizedString;
  description: LocalizedString;
  questions: Question[];
}
