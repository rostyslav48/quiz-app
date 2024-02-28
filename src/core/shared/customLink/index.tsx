import { FC } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './style.scss';

type Props = {
  text: string;
  to: string;
  handleClick?: () => void;
  containerClasses?: string;
  linkClasses?: string;
  isDisabled?: boolean;
};

export const CustomLink: FC<Props> = ({
  to,
  handleClick,
  text,
  containerClasses = '',
  linkClasses = '',
  isDisabled = false,
}) => {
  return (
    <div className={`${containerClasses} custom-link`}>
      <Link
        onClick={handleClick}
        className={classnames('custom-link__button', linkClasses, {
          'custom-link__button--disabled': isDisabled,
        })}
        to={isDisabled ? '' : to}
      >
        {text}
      </Link>
    </div>
  );
};
