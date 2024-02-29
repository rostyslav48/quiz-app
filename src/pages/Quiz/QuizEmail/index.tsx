import { CustomLink } from 'core/shared/customLink';
import './style.scss';
import { useEffect, useState } from 'react';
import { Routes, StorageKeys } from 'core/enums';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

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

  const handleSaveEmail = () => {
    localStorage.setItem(StorageKeys.Email, email);
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

        {isErrorShown && (
          <span className="quiz-email__error">
            {t('quizEmail.invalid-email')}
          </span>
        )}
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
