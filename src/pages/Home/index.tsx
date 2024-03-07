import { QuizCard } from './components/quizCard';
import { QuizApi } from 'core/api';
import { useEffect, useState } from 'react';

import './style.scss';
import { QuizData } from 'core/types';

export const Home = () => {
  const [quizData, setQuizData] = useState<QuizData[]>([]);

  useEffect(() => {
    QuizApi.getTests().then(setQuizData).catch(console.error);
  }, []);

  return (
    <main className="home wrapper">
      <ul className="home__quiz grid">
        {!!quizData.length &&
          quizData.map((data) => <QuizCard key={data.id} quizData={data} />)}
      </ul>
    </main>
  );
};
