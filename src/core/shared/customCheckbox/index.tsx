import { FC } from 'react';
import classnames from 'classnames';

// Images
import Tick from 'icons/tick-icon.svg?react';

import './style.scss';

type Props = {
  isChecked: boolean;
  handleClick: () => void;
};

export const CustomCheckbox: FC<Props> = ({ isChecked, handleClick }) => {
  return (
    <div
      className={classnames('custom-checkbox', {
        'custom-checkbox--checked': isChecked,
      })}
      onClick={handleClick}
    >
      {isChecked && <Tick className="custom-checkbox__tick" />}
    </div>
  );
};
