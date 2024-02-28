import { FC } from 'react';
import { Option, Question } from 'core/types/quiz-data.type';
import { QuestionTypes, Routes, StorageKeys } from 'core/enums';
import { SingleSelect } from '../singleSelect';
import { saveAnswerToStore } from 'core/helpers';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getTestLanguage } from 'core/helpers';

import './style.scss';

type Props = {
  question: Question;
  questionsCount: number;
};

export const QuestionsList: FC<Props> = ({ question, questionsCount }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

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

    if (questionId === StorageKeys.TestLocale) {
      i18n.changeLanguage(getTestLanguage());
    }

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
