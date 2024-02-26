import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { QuizQuestion } from './pages/Quiz/QuizQuestion';
import { NotFound } from './pages/NotFound';
import { Quiz } from './pages/Quiz';
import { QuizStartScreen } from './pages/Quiz/QuizStartScreen';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="quiz/:quizId" element={<Quiz />}>
          <Route index element={<QuizStartScreen />} />
          <Route path=":questionId" element={<QuizQuestion />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);
