import { quizData } from 'core/constants/quiz-data';
import { Routes } from 'core/enums';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';

// Icons
import Arrow from 'icons/arrow-icon.svg?react';
import Menu from 'icons/menu-icon.svg?react';

import './style.scss';
import { LineProgressBar } from 'core/shared/lineProgressBar';
import { languagePickQuestion } from 'core/constants/lanquage-pick-question';
import { convertToPercents } from 'core/helpers';

export const Quiz = () => {
  const navigate = useNavigate();
  const { [Routes.QuizId]: id, [Routes.QuestionId]: questionId } = useParams();
  const currentQuizData = quizData.find((quiz) => quiz.id === id);

  if (!currentQuizData) {
    return <Navigate to={Routes.NotFound} />;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const preparedQuizData = {
    ...currentQuizData,
    questions: [languagePickQuestion, ...currentQuizData.questions],
  };
  const questionsQuantity = preparedQuizData.questions.length;

  return (
    <main className="quiz wrapper">
      {questionId && (
        <div className="quiz__progress">
          <div className="quiz__nav">
            <Arrow onClick={handleBackClick} className="quiz__icon-progress" />
            <div>
              <span className="quiz__questionInfo quiz__questionInfo--highlight">
                {questionId}
              </span>
              <span className="quiz__questionInfo">{`/${questionsQuantity}`}</span>
            </div>

            <Menu className="quiz__icon-progress" />
          </div>
          <LineProgressBar
            progress={convertToPercents(+questionId, questionsQuantity)}
          />
        </div>
      )}
      <Outlet context={preparedQuizData} />
    </main>
  );
};
