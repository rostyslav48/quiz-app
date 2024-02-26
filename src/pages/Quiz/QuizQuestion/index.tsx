import { QuizData } from 'core/types/quiz-data.type';
import { Navigate, useOutletContext, useParams } from 'react-router-dom';
import { Routes } from 'core/enums';

import './style.scss';
import { getTranslatedData } from 'core/helpers';
import { QuestionsList } from './components/questionsList';

export const QuizQuestion = () => {
  const context: QuizData = useOutletContext();
  const { [Routes.QuestionId]: questionId } = useParams();

  const question = context.questions.find(
    (question) => question.id === questionId,
  );
  console.log(questionId);

  if (!question) {
    return <Navigate to={Routes.NotFound} />;
  }

  const { locale, description, options, type } = question;

  return (
    <div className="quiz-question">
      <div className="quiz-question__header">
        <h1 className="quiz-question__title">{getTranslatedData(locale)}</h1>
        <p className="quiz-question__description">
          {getTranslatedData(description)}
        </p>
      </div>

      <div className="quiz-question__options">
        <QuestionsList
          options={options}
          questionType={type}
          handleClick={() => {}}
        />
      </div>
    </div>
  );
};
