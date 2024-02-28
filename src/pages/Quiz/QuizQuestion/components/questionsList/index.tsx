import { FC } from 'react';
import { Option, Question } from 'core/types/quiz-data.type';
import { QuestionTypes, Routes, StorageKeys } from 'core/enums';
import { SingleSelect } from '../singleSelect';
import { saveAnswerToStore } from 'core/helpers';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getTestLanguage } from 'core/helpers';
import { MultiSelect } from '../multiSelect';
import { CustomLink } from 'core/shared/customLink';
import { useState } from 'react';

import './style.scss';

type Props = {
  question: Question;
  questionsCount: number;
};

export const QuestionsList: FC<Props> = ({ question, questionsCount }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [multiSelectValues, setMultiSelectValues] = useState<Option[]>([]);

  const {
    options,
    id: questionId,
    locale,
    type: questionType,
    sequenceNumber,
  } = question;

  const path =
    questionsCount === sequenceNumber
      ? Routes.QuizProcessing
      : (sequenceNumber + 1).toString();

  const goToNextQuestion = () => {
    navigate(`../${path}`);
  };

  const handleSingleSelect = (option: Option) => {
    saveAnswerToStore(questionId, locale, questionType, [option]);

    if (questionId === StorageKeys.TestLocale) {
      i18n.changeLanguage(getTestLanguage());
    }

    goToNextQuestion();
  };

  const handleMultiSelectChange = (option: Option) => {
    const isOptionSelected = multiSelectValues.some(
      ({ id }) => id === option.id,
    );

    if (isOptionSelected) {
      setMultiSelectValues((prevState) =>
        prevState.filter(({ id }) => id !== option.id),
      );

      return;
    }

    setMultiSelectValues((prevState) => [...prevState, option]);
  };

  const handleMultiSelect = () => {
    saveAnswerToStore(questionId, locale, questionType, multiSelectValues);
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
    case QuestionTypes.MultipleSelect:
      return (
        <>
          <ul className="options-list--multiple-select">
            {options.map((option) => (
              <li
                key={option.id}
                className="options-list__option--single-select"
              >
                <MultiSelect
                  option={option}
                  selectedOptions={multiSelectValues}
                  handleClick={handleMultiSelectChange}
                />
              </li>
            ))}
          </ul>
          <CustomLink
            isDisabled={!multiSelectValues.length}
            to={`../${path}`}
            text={t('next')}
            handleClick={handleMultiSelect}
          />
        </>
      );

    default:
      return null;
  }
};
