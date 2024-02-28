import { FC } from 'react';
import { Option, Question } from 'core/types/quiz-data.type';
import { QuestionTypes, Routes } from 'core/enums';
import { SingleSelect } from '../singleSelect';

import './style.scss';
import { saveAnswerToStore } from 'core/helpers';
import { useNavigate } from 'react-router-dom';

type Props = {
  question: Question;
  questionsCount: number;
};

export const QuestionsList: FC<Props> = ({ question, questionsCount }) => {
  const navigate = useNavigate();

  const {
    options,
    id: questionId,
    locale,
    type: questionType,
    sequenceNumber,
  } = question;

  const goToNextQuestion = () => {
    const path =
      questionsCount === sequenceNumber
        ? Routes.QuizProcessing
        : (sequenceNumber + 1).toString();

    navigate(`../${path}`);
  };

  const handleSingleSelect = (option: Option) => {
    saveAnswerToStore(questionId, locale, questionType, [option]);
    goToNextQuestion();
  };

  switch (questionType) {
    case QuestionTypes.SingleSelect:
      return (
        <ul className="options-list--single-select">
          {options.map((option) => (
            <li key={option.id} className="options-list__option--single-select">
              <SingleSelect option={option} handleClick={handleSingleSelect} />
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
};
