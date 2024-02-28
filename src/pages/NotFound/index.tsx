import { useTranslation } from 'react-i18next';
import { Routes } from 'core/enums';
import { Link } from 'react-router-dom';

// Images
import Error from 'icons/404-icon.svg?react';
import Arrow from 'icons/arrow-icon.svg?react';

import './style.scss';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="not-found">
      <div className="not-found__content">
        <Error className="not-found__icon" />
        <h1 className="not-found__title">{t('notFound')}</h1>
        <Link className="not-found__link" to={Routes.Home}>
          <Arrow className="not-found__link-icon" />
          {t('back-home')}
        </Link>
      </div>
    </main>
  );
};
