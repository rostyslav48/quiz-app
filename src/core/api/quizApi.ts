import MockAdapter from 'axios-mock-adapter';
import { QuizData, Test } from 'core/types';
import { REQUEST_APIS } from './requests';
import { API } from './api';
import { quizData } from 'core/constants/quiz-data';

// TODO replace with the real one
// Mocked responses
const mock = new MockAdapter(API);
mock.onPost(REQUEST_APIS.QUIZ.ANSWERS).reply((config) => {
  const requestData = JSON.parse(config.data);

  return [201, requestData];
});

mock.onGet(REQUEST_APIS.QUIZ.TESTS).reply(200, quizData);

export class QuizApi {
  static sendAnswers = async (answers: Test) => {
    try {
      const res = await API.post(REQUEST_APIS.QUIZ.ANSWERS, answers);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  static getTests = async () => {
    try {
      const res = await API.get(REQUEST_APIS.QUIZ.TESTS);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  static getTest = async (id: string): Promise<QuizData> => {
    // I had some troubles with mocking the dynamic route
    const tests: QuizData[] = await this.getTests();

    const test = tests.find((test) => test.id === id) ?? null;

    if (!test) {
      throw new Error('404 test is not found');
    }

    return test;
  };
}
