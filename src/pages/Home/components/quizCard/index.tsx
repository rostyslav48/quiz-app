import { FC } from 'react';
import { getTranslatedData } from 'core/helpers';
import { QuizData } from 'core/types/quiz-data.type';

import './style.scss';
import { Link } from 'react-router-dom';
import { Routes } from 'core/enums';

type Props = {
  quizData: QuizData;
};

export const QuizCard: FC<Props> = ({ quizData }) => {
  const { title, description, img, id } = quizData;
  return (
    <Link className="quiz-card" to={`${Routes.Quiz}/${id}`}>
      <img
        src={img}
        alt={getTranslatedData(title)}
        className="quiz-card__img"
      />

      <div className="quiz-card__content">
        <h3 className="quiz-card__title">{getTranslatedData(title)}</h3>
        <p className="quiz-card__description">
          {getTranslatedData(description)}
        </p>
      </div>
    </Link>
  );
};
