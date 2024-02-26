import { Option } from 'core/types/quiz-data.type';
import { getTranslatedData } from 'core/helpers';

import './style.scss';
import { FC } from 'react';

type Props = {
  option: Option;
  handleClick: () => void;
};

export const SingleSelect: FC<Props> = ({ option, handleClick }) => {
  const { locale } = option;
  return (
    <div onClick={handleClick} className="single-select">
      <p className="single-select__content">{getTranslatedData(locale)}</p>
    </div>
  );
};
