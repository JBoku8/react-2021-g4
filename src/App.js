import { Switch, Route } from 'react-router';

import HomePage from './pages/home-page';
import NotesPage from './pages/notes-page';
import ClassCounter from './pages/class-counter/class-counter';
import Profile from './pages/profile';
import AuthPage from './pages/auth';

import Navigation from './components/navigation/navigation';
import Theme from './components/theme/theme';

import NotesProvider from './contexts/NotesProvider';

import './App.css';

function App() {
  return (
    <div className="container">
      <Navigation />

      <Theme>
        <Switch>
          <Route path="/counter">
            <ClassCounter title="class component example" initialValue={10} />
          </Route>

          <Route path="/notes">
            <NotesProvider>
              <NotesPage />
            </NotesProvider>
          </Route>

          <Route path="/profile">
            <Profile title="Secured Profile Page" />
          </Route>

          <Route path="/auth">
            <AuthPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Theme>
    </div>
  );
}

export default App;
