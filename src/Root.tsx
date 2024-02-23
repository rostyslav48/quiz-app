import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { QuizQuestion } from './pages/QuizQuestion';
import { NotFound } from './pages/NotFound';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="quiz/:quizId" element={<QuizQuestion />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);
