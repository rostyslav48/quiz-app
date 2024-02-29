import { Option } from 'core/types';
import { FC } from 'react';
import { getTestTranslation } from 'core/helpers';

import './style.scss';

type Props = {
  option: Option;
  handleClick: (option: Option) => void;
};

export const SingleSelectImage: FC<Props> = ({ option, handleClick }) => {
  const { locale, img } = option;

  const title = getTestTranslation(locale);
  return (
    <div onClick={() => handleClick(option)} className="single-select-image">
      <img src={img} alt={title} className="single-select-image__img" />
      <span className="single-select-image__description">{title}</span>
    </div>
  );
};
