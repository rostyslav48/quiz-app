import { CustomLink } from 'core/shared/customLink';
import { useEffect, useState } from 'react';
import { Routes, StorageKeys } from 'core/enums';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Test } from 'core/types';
import { QuizApi } from 'core/api';

import './style.scss';

const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const QuizEmail = () => {
  const [email, setEmail] = useState('');
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);
  const [isErrorShown, setIsErrorShown] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (EMAIL_PATTERN.test(email)) {
      setIsEmailCorrect(true);
    }

    if (isErrorShown) {
      setIsErrorShown(false);
    }
  }, [email]);

  const handleSaveEmail = async () => {
    const testRaw = localStorage.getItem(StorageKeys.Test);
    const test: Test = testRaw ? JSON.parse(testRaw) : {};

    const preparedEmail = {
      question: t('quizEmail.email'),
      questionType: t('quizEmail.email'),
      selectedOptions: [
        {
          id: 'email',
          answer: email,
        },
      ],
    };

    test.email = preparedEmail;

    localStorage.setItem(StorageKeys.Test, JSON.stringify(test));

    await QuizApi.sendAnswers(test).catch(console.error);
  };

  return (
    <main className="quiz-email">
      <div className="quiz-email__header">
        <h1 className="quiz-email__title">{t('quizEmail.email')}</h1>
        <span className="quiz-email__subtitle">
          {t('quizEmail.enter-email')}
        </span>
      </div>

      <div className="quiz-email__form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('quizEmail.your-email')}
          type="email"
          className={classnames('quiz-email__input', {
            'quiz-email__input-error': isErrorShown,
          })}
          required
        />

        <span
          className={classnames('quiz-email__error', {
            'visib--h': !isErrorShown,
          })}
        >
          {t('quizEmail.invalid-email')}
        </span>
      </div>

      <p className="quiz-email__policy">
        {t('privacy.p1')}{' '}
        <a href="#" className="quiz-email__policy-link">
          {t('privacy.p2')}
        </a>{' '}
        {t('privacy.p3')}{' '}
        <a href="#" className="quiz-email__policy-link">
          {t('privacy.p4')}
        </a>
        .
      </p>

      <CustomLink
        to={`../${Routes.QuizResults}`}
        handleClick={
          isEmailCorrect ? handleSaveEmail : () => setIsErrorShown(true)
        }
        text={t('next')}
        isDisabled={!isEmailCorrect}
      />
    </main>
  );
};
