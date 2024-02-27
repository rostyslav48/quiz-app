import { Option } from 'core/types/quiz-data.type';
import { getTestTranslation } from 'core/helpers';

import './style.scss';
import { FC } from 'react';

type Props = {
  option: Option;
  handleClick: (option: Option) => void;
};

export const SingleSelect: FC<Props> = ({ option, handleClick }) => {
  const { locale } = option;
  return (
    <div onClick={() => handleClick(option)} className="single-select">
      <p className="single-select__content">{getTestTranslation(locale)}</p>
    </div>
  );
};
