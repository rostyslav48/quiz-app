export interface Answer {
  question: string;
  questionType: string;
  selectedOptions: {
    id: string;
    answer: string;
  }[];
}

export interface Test {
  [key: string]: Answer;
}
