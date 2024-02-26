import { FC } from 'react';
import { Option } from 'core/types/quiz-data.type';
import { QuestionTypes } from 'core/enums';
import { SingleSelect } from '../singleSelect';

import './style.scss';

type Props = {
  options: Option[];
  questionType: string;
  handleClick: () => void;
};

export const QuestionsList: FC<Props> = ({
  options,
  questionType,
  handleClick,
}) => {
  switch (questionType) {
    case QuestionTypes.SingleSelect:
      return (
        <ul className="options-list grid">
          {options.map((option) => (
            <li className="options-list__option--single-select">
              <SingleSelect option={option} handleClick={handleClick} />
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
};
