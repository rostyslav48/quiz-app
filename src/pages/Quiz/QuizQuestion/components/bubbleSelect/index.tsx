import { Option } from 'core/types';
import { FC } from 'react';
import { getTestTranslation } from 'core/helpers';
import classnames from 'classnames';

import './style.scss';

type Props = {
  option: Option;
  selectedOptions: Option[];
  handleClick: (optionId: Option) => void;
};

export const BubbleSelect: FC<Props> = ({
  option,
  selectedOptions,
  handleClick,
}) => {
  const { locale, img } = option;
  const isChecked = selectedOptions.some(({ id }) => id === option.id);

  const description = getTestTranslation(locale);
  return (
    <div
      onClick={() => handleClick(option)}
      className={classnames('bubble-select', {
        'bubble-select--active': isChecked,
      })}
    >
      <img src={img} alt={description} className="bubble-select__img" />
      <span className="bubble-select__description">{description}</span>
    </div>
  );
};
