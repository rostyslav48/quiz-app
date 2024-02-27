import { useOutletContext } from 'react-router-dom';
import { getTranslatedData } from 'core/helpers';
import { QuizData } from 'core/types/quiz-data.type';

import './style.scss';
import { StorageKeys } from 'core/enums';
import { CustomLink } from 'core/shared/customLink';

export const QuizStartScreen = () => {
  const context: QuizData = useOutletContext();
  const { img, title, description, questions } = context;
  const firstQuestion = questions[0].sequenceNumber;

  const handleTestReset = () => {
    localStorage.removeItem(StorageKeys.Test);
  };

  return (
    <div className="quiz-start-screen">
      <img
        src={img}
        alt={getTranslatedData(title)}
        className="quiz-start-screen__img"
      />
      <div className="quiz-start-screen__content">
        <h1 className="quiz-start-screen__title">{getTranslatedData(title)}</h1>
        <p className="quiz-start-screen__description">
          {getTranslatedData(description)}
        </p>
        <div className="quiz-start-screen__questions-number">
          <span>Questions number:</span>
          <span>{questions.length}</span>
        </div>
      </div>

      <CustomLink
        handleClick={handleTestReset}
        to={firstQuestion.toString()}
        text="Start Quiz"
      />
    </div>
  );
};
