import { useEffect, useRef, useState } from 'react';
import { CircularProgressBar } from 'core/shared/circularProgressBar';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'core/enums';
import { useTranslation } from 'react-i18next';

const CIRCLE_WIDTH = 252;

export const QuizLoader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [percentage, setPercentage] = useState(0);
  const percentageIntervalRef = useRef<null | number>(null);

  useEffect(() => {
    percentageIntervalRef.current = setInterval(() => {
      setPercentage((prevState) => prevState + 1);
    }, 50);

    return () => {
      clearInterval(percentageIntervalRef.current as number);
    };
  }, []);

  useEffect(() => {
    if (percentage >= 100) {
      clearInterval(percentageIntervalRef.current as number);
      navigate(`../${Routes.QuizEmail}`);
    }
  }, [percentage]);

  return (
    <div className="quiz-loader">
      <CircularProgressBar percentage={percentage} circleWidth={CIRCLE_WIDTH} />
      <h3 className="quiz-loader__title">{t('quizLoader.find-collections')}</h3>
    </div>
  );
};
