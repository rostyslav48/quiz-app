import { QuizData } from 'core/types/quiz-data.type';
import { Navigate, useOutletContext, useParams } from 'react-router-dom';
import { Routes } from 'core/enums';

import './style.scss';
import { getTestTranslation } from 'core/helpers';
import { QuestionsList } from './components/questionsList';

export const QuizQuestion = () => {
  const context: QuizData = useOutletContext();
  const { [Routes.QuestionId]: questionId } = useParams();

  const question = context.questions.find(
    (question) => question.sequenceNumber === Number(questionId),
  );

  if (!question) {
    return <Navigate to={Routes.NotFound} />;
  }

  const questionsCount = context.questions.length;
  const { locale, description } = question;

  return (
    <div className="quiz-question">
      <div className="quiz-question__header">
        <h1 className="quiz-question__title">{getTestTranslation(locale)}</h1>
        <p className="quiz-question__description">
          {getTestTranslation(description)}
        </p>
      </div>

      <div className="quiz-question__options">
        <QuestionsList questionsCount={questionsCount} question={question} />
      </div>
    </div>
  );
};
