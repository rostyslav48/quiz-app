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
import { SingleSelectImage } from '../singleSelectImage';
import { BubbleSelect } from '../bubbleSelect';

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

  const handleSingleSelect = (option: Option) => {
    saveAnswerToStore(questionId, locale, questionType, [option]);

    if (questionId === StorageKeys.TestLocale) {
      i18n.changeLanguage(getTestLanguage());
    }

    navigate(`../${path}`);
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

  const handleBubbleSelectChange = (option: Option) => {
    const isOptionSelected = multiSelectValues.some(
      ({ id }) => id === option.id,
    );

    if (isOptionSelected) {
      setMultiSelectValues((prevState) =>
        prevState.filter(({ id }) => id !== option.id),
      );

      return;
    }

    if (multiSelectValues.length < 3) {
      setMultiSelectValues((prevState) => [...prevState, option]);
    }
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

    case QuestionTypes.SingleSelectImage:
      return (
        <ul className="options-list--single-select-image">
          {options.map((option) => (
            <li key={option.id}>
              <SingleSelectImage
                option={option}
                handleClick={handleSingleSelect}
              />
            </li>
          ))}
        </ul>
      );

    case QuestionTypes.Bubble:
      return (
        <>
          <ul className="options-list--bubble-select">
            {options.map((option) => (
              <li key={option.id}>
                <BubbleSelect
                  option={option}
                  handleClick={handleBubbleSelectChange}
                  selectedOptions={multiSelectValues}
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
