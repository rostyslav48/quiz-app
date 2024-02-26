import { FC } from 'react';
import './style.scss';

type Props = {
  progress: number;
  barClasses?: string;
  fillClasses?: string;
};

export const LineProgressBar: FC<Props> = ({
  progress,
  barClasses = '',
  fillClasses = '',
}) => {
  return (
    <div className={`line-progress-bar ${barClasses}`}>
      <div
        style={{ width: `${progress}%` }}
        className={`line-progress-bar__fill ${fillClasses}`}
      ></div>
    </div>
  );
};
