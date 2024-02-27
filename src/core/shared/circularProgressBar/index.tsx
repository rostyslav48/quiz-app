import { FC } from 'react';
import './style.scss';

type Props = {
  percentage: number;
  circleWidth: number;
};

export const CircularProgressBar: FC<Props> = ({ percentage, circleWidth }) => {
  const radius = circleWidth / 2 - 10;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="circular-progress">
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          className="circular-progress__background"
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          className="circular-progress__progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
      </svg>

      <span className="circular-progress__description">{`${percentage}%`}</span>
    </div>
  );
};
