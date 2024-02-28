import { CustomLink } from 'core/shared/customLink';
import { Routes, StorageKeys } from 'core/enums';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CSVLink } from 'react-csv';

// Images
import Success from 'icons/success-icon.svg?react';
import Download from 'icons/download-icon.svg?react';
import Arrow from 'icons/arrow-icon.svg?react';

import './style.scss';
import { Test } from 'core/types';

export const QuizResults = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem(StorageKeys.Email);
  const testRaw = localStorage.getItem(StorageKeys.Test);
  const test: Test = testRaw ? JSON.parse(testRaw) : [];

  const preparedTest = Object.values(test).map((question, index) => ({
    order: index + 1,
    title: question.question,
    type: question.questionType,
    answer: question.selectedOptions.join(', '),
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
        <h1 className="quiz-results__title">Thank you</h1>
        <span className="quiz-results__subtitle">
          for supporting us and passing the quiz
        </span>
      </div>

      <Success className="quiz-results__success" />

      <Link className="quiz-results__back" to={`/${Routes.Home}`}>
        <Arrow className="quiz-results__back-icon" />
        Back to home
      </Link>

      <CSVLink className="quiz-results__download" data={preparedTest}>
        <Download className="quiz-results__download-icon" />
        <span className="quiz-results__download-text">Download my answers</span>
      </CSVLink>

      <CustomLink to="../1" text="Retake" handleClick={handleTestClear} />
    </main>
  );
};
