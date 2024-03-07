import { Routes } from 'core/enums';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { LineProgressBar } from 'core/shared/lineProgressBar';
import { languagePickQuestion } from 'core/constants/lanquage-pick-question';
import { convertToPercents, getTestLanguage } from 'core/helpers';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import classnames from 'classnames';
import { useState } from 'react';
import { QuizData } from 'core/types';
import { QuizApi } from 'core/api';
import { QuizLoader } from './QuizLoader';

// Images
import Arrow from 'icons/arrow-icon.svg?react';
import Menu from 'icons/menu-icon.svg?react';

import './style.scss';

export const Quiz = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { [Routes.QuizId]: id, [Routes.QuestionId]: questionId } = useParams();
  const [test, setTest] = useState<QuizData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isFirstQuestion = questionId && Number(questionId) === 1;

  useEffect(() => {
    i18n.changeLanguage(getTestLanguage());
    setIsLoading(true);
    QuizApi.getTest(id!)
      .then((test) =>
        setTest({
          ...test,
          questions: [languagePickQuestion, ...test.questions],
        }),
      )
      .catch(() => navigate(Routes.NotFound))
      .finally(() => setIsLoading(false));
  }, []);

  const handleBackClick = () => {
    if (!isFirstQuestion) {
      navigate(-1);
    }
  };

  if (isLoading || !test) {
    // here we can add some loader
    return <QuizLoader />;
  }

  const questionsQuantity = test.questions.length;

  return (
    <div className="quiz wrapper">
      <header className="quiz__progress">
        <div className="quiz__nav">
          <Arrow
            onClick={handleBackClick}
            className={classnames('quiz__icon-progress', {
              'is-disabled': isFirstQuestion,
            })}
          />
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
      <Outlet context={test} />
    </div>
  );
};
