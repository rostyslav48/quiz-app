import { quizData } from 'core/constants/quiz-data';
import { QuizCard } from './components/quizCard';
import './style.scss';

export const Home = () => {
  return (
    <main className="home wrapper">
      <ul className="home__quiz grid">
        {quizData.map((data) => (
          <QuizCard key={data.id} quizData={data} />
        ))}
      </ul>
    </main>
  );
};
