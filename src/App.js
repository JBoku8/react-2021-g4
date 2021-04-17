import { useState } from 'react';
import HomePage from './pages/home-page';
import NotesPage from './pages/notes-page';
import ClassCounter from './pages/class-counter/class-counter';
import Navigation from './components/navigation/navigation';
import Theme from './components/theme/theme';

import './App.css';

function App() {
  const [page, setPage] = useState({
    homePage: false,
    notesPage: false,
    classCounter: true,
  });

  const [activePage, setActivePage] = useState('classCounter');

  // newObject !== oldObject

  const onPageChange = (pageKey) => {
    const updatedPage = { ...page };
    Object.keys(updatedPage).forEach((key) => {
      if (key === pageKey) {
        updatedPage[pageKey] = true;
      } else {
        updatedPage[key] = false;
      }
    });

    setPage(updatedPage);
    setActivePage(pageKey);
  };

  const renderPage = () => {
    if (page.homePage) {
      return <HomePage />;
    } else if (page.notesPage) {
      return <NotesPage />;
    } else if (page.classCounter) {
      return <ClassCounter title="class component example" initialValue={10} />;
    }
  };

  return (
    <div className="container">
      <Navigation activePage={activePage} onPageChange={onPageChange} />

      <Theme type={activePage}>{renderPage()}</Theme>
    </div>
  );
}

export default App;
