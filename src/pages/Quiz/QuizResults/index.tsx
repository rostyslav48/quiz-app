import { CustomLink } from 'core/shared/customLink';
import { Routes, StorageKeys } from 'core/enums';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { useTranslation } from 'react-i18next';
import { QuizData, Test } from 'core/types';
import { getTestTranslation } from 'core/helpers';

// Images
import Success from 'icons/success-icon.svg?react';
import Download from 'icons/download-icon.svg?react';
import Arrow from 'icons/arrow-icon.svg?react';

import './style.scss';

export const QuizResults = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { title }: QuizData = useOutletContext();
  const email = localStorage.getItem(StorageKeys.Email);
  const testRaw = localStorage.getItem(StorageKeys.Test);
  const test: Test = testRaw ? JSON.parse(testRaw) : {};

  const resultsFileName = `${getTestTranslation(title)}-results.csv`;
  const preparedTest = Object.values(test).map((question, index) => ({
    order: index + 1,
    title: question.question,
    type: question.questionType,
    answer: question.selectedOptions.map(({ answer }) => answer).join(', '),
  }));

  useEffect(() => {
    if (!email) {
      navigate(`../${Routes.QuizEmail}`);
    }
  }, []);

  const handleTestClear = () => {
    localStorage.removeItem(StorageKeys.Test);
  };

  return (
    <main className="quiz-results">
      <div className="quiz-results__header">
        <h1 className="quiz-results__title">{t('quizResults.thank-you.p1')}</h1>
        <span className="quiz-results__subtitle">
          {t('quizResults.thank-you.p2')}
        </span>
      </div>

      <Success className="quiz-results__success" />

      <Link
        className="quiz-results__back"
        onClick={handleTestClear}
        to={`${Routes.Home}`}
      >
        <Arrow className="quiz-results__back-icon" />
        {t('back-home')}
      </Link>

      <CSVLink
        className="quiz-results__download"
        data={preparedTest}
        filename={resultsFileName}
      >
        <Download className="quiz-results__download-icon" />
        <span className="quiz-results__download-text">
          {t('quizResults.download')}
        </span>
      </CSVLink>

      <CustomLink
        to="../1"
        text={t('quizResults.retake')}
        handleClick={handleTestClear}
      />
    </main>
  );
};
