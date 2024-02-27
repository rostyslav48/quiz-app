// Images
import Success from 'icons/success-icon.svg?react';
import Download from 'icons/download-icon.svg?react';

import './style.scss';
import { CustomLink } from 'core/shared/customLink';

export const QuizResults = () => {
  return (
    <main className="quiz-results">
      <div className="quiz-results__header">
        <h1 className="quiz-results__title">Thank you</h1>
        <span className="quiz-results__subtitle">
          for supporting us and passing the quiz
        </span>
      </div>

      <Success className="quiz-results__success" />

      <div className="quiz-results__download">
        <Download className="quiz-results__download-icon" />
        <span className="quiz-results__download-text">Download my answers</span>
      </div>

      <CustomLink to="../1" text="Retake" />
    </main>
  );
};
