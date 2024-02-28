import { quizData } from 'core/constants/quiz-data';
import { Routes } from 'core/enums';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import { LineProgressBar } from 'core/shared/lineProgressBar';
import { languagePickQuestion } from 'core/constants/lanquage-pick-question';
import { convertToPercents, getTestLanguage } from 'core/helpers';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

// Icons
import Arrow from 'icons/arrow-icon.svg?react';
import Menu from 'icons/menu-icon.svg?react';

import './style.scss';

export const Quiz = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { [Routes.QuizId]: id, [Routes.QuestionId]: questionId } = useParams();
  const currentQuizData = quizData.find((quiz) => quiz.id === id);

  useEffect(() => {
    i18n.changeLanguage(getTestLanguage());
  }, []);

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
    <div className="quiz wrapper">
      <header className="quiz__progress">
        <div className="quiz__nav">
          <Arrow onClick={handleBackClick} className="quiz__icon-progress" />
          {questionId && (
            <div>
              <span className="quiz__questionInfo quiz__questionInfo--highlight">
                {questionId}
              </span>
              <span className="quiz__questionInfo">{`/${questionsQuantity}`}</span>
            </div>
          )}

          <Menu className="quiz__icon-progress visib--h" />
        </div>
        {questionId && (
          <LineProgressBar
            progress={convertToPercents(+questionId, questionsQuantity)}
          />
        )}
      </header>
      <Outlet context={preparedQuizData} />
    </div>
  );
};
