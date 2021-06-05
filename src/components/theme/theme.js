import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import css from './theme.module.css';

function Theme({ children }) {
  const { pathname } = useLocation();
  const [themeType, setThemeType] = useState();

  useEffect(() => {
    let theme = '';
    switch (pathname) {
      case '/notes':
        theme = css.notesPage;
        break;
      case '/counter':
      case '/profile':
        theme = css.classCounter;
        break;
      case '/credit-cards':
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
