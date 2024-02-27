import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { QuizQuestion } from './pages/Quiz/QuizQuestion';
import { NotFound } from './pages/NotFound';
import { Quiz } from './pages/Quiz';
import { QuizStartScreen } from './pages/Quiz/QuizStartScreen';
import { QuizLoader } from './pages/Quiz/QuizLoader';
import { Routes as RoutesEnum } from 'core/enums';
import { QuizEmail } from './pages/Quiz/QuizEmail';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route
          path={`${RoutesEnum.Quiz}/:${RoutesEnum.QuizId}`}
          element={<Quiz />}
        >
          <Route index element={<QuizStartScreen />} />
          <Route path={RoutesEnum.QuizProcessing} element={<QuizLoader />} />
          <Route path={RoutesEnum.QuizEmail} element={<QuizEmail />} />
          {/* <Route path="results" element={<Quiz />} /> */}
          <Route
            path={`:${RoutesEnum.QuestionId}`}
            element={<QuizQuestion />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

('quiz/:quizId');
