import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import {
  NOTES_PATH,
  COUNTER_PATH,
  PROFILE_PATH,
  CREDIT_CARDS_PATH,
} from '../../utils/routePaths';

import css from './theme.module.css';

function Theme({ children }) {
  const { pathname } = useLocation();
  const [themeType, setThemeType] = useState();

  useEffect(() => {
    let theme = '';
    switch (pathname) {
      case NOTES_PATH:
        theme = css.notesPage;
        break;
      case COUNTER_PATH:
      case PROFILE_PATH:
        theme = css.classCounter;
        break;
      case CREDIT_CARDS_PATH:
        theme = 'bg-light';
        break;
      default:
        theme = 'bg-light';
    }

    setThemeType(theme);
  }, [pathname]);

  return <div className={classNames('row p-4', themeType)}>{children}</div>;
}

export default Theme;
