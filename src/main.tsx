import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './Root.tsx';
import './i18n.ts';

import './styles/_utils.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
