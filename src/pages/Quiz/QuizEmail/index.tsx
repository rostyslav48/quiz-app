import { CustomLink } from 'core/shared/customLink';
import './style.scss';
import { useEffect, useState } from 'react';
import { Routes, StorageKeys } from 'core/enums';
import classnames from 'classnames';

const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const QuizEmail = () => {
  const [email, setEmail] = useState('');
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);
  const [isErrorShown, setIsErrorShown] = useState(false);

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
    <div className="quiz-email">
      <div className="quiz-email__header">
        <h1 className="quiz-email__title">Email</h1>
        <span className="quiz-email__subtitle">
          Enter your email to get full access
        </span>
      </div>

      <div className="quiz-email__form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          type="email"
          className={classnames('quiz-email__input', {
            'quiz-email__input-error': isErrorShown,
          })}
          required
        />

        {isErrorShown && (
          <span className="quiz-email__error">Invalid email</span>
        )}
      </div>

      <p className="quiz-email__policy">
        By continuing I agree with{' '}
        <a href="#" className="quiz-email__policy-link">
          Privacy policy
        </a>{' '}
        and{' '}
        <a href="#" className="quiz-email__policy-link">
          Terms of use
        </a>
        .
      </p>

      <CustomLink
        to={`../${Routes.QuizResults}`}
        handleClick={
          isEmailCorrect ? handleSaveEmail : () => setIsErrorShown(true)
        }
        text="Next"
        isDisabled={!isEmailCorrect}
      />
    </div>
  );
};
