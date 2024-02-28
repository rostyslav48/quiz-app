import { Option } from 'core/types/quiz-data.type';
import { getTestTranslation } from 'core/helpers';
import { FC } from 'react';
import { CustomCheckbox } from 'core/shared/customCheckbox';

import './style.scss';

type Props = {
  option: Option;
  selectedOptions: Option[];
  handleClick: (optionId: Option) => void;
};

export const MultiSelect: FC<Props> = ({
  option,
  selectedOptions,
  handleClick,
}) => {
  const { locale } = option;
  const isChecked = selectedOptions.some(({ id }) => id === option.id);

  const handleCheckboxClick = () => handleClick(option);
  return (
    <div className="multi-select">
      <p className="multi-select__content">{getTestTranslation(locale)}</p>
      <CustomCheckbox isChecked={isChecked} handleClick={handleCheckboxClick} />
    </div>
  );
};
