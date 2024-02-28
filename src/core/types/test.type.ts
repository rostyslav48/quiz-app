export interface Answer {
  question: string;
  questionType: string;
  selectedOptions: string[];
}

export interface Test {
  [key: string]: Answer;
}
