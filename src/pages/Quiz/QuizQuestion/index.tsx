import { QuizData } from 'core/types/quiz-data.type';
import { Navigate, useOutletContext, useParams } from 'react-router-dom';
import { Routes } from 'core/enums';
import { getTestTranslation } from 'core/helpers';
import { QuestionsList } from './components/questionsList';

import './style.scss';

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
  const { locale, description, id } = question;

  return (
    <main className="quiz-question">
      <div className="quiz-question__header">
        <h1 className="quiz-question__title">{getTestTranslation(locale)}</h1>
        <p className="quiz-question__description">
          {getTestTranslation(description)}
        </p>
      </div>

      <QuestionsList
        key={id}
        questionsCount={questionsCount}
        question={question}
      />
    </main>
  );
};
