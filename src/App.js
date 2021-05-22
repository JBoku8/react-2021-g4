import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router';

import HomePage from './pages/home-page';
import Navigation from './components/navigation';
import Theme from './components/theme/theme';
import NotesProvider from './contexts/NotesProvider';
import { Loader } from './components/loader';

import './App.css';

const NotesPage = React.lazy(() => import('./pages/notes-page'));
const ClassCounter = React.lazy(() => import('./pages/class-counter'));
const Profile = React.lazy(() => import('./pages/profile'));
const AuthPage = React.lazy(() => import('./pages/auth'));
const CreditCards = React.lazy(() => import('./pages/credit-cards'));

function App() {
  return (
    <div className="container">
      <Navigation />

      <Theme>
        <Suspense fallback={<Loader message="Page is loading..." />}>
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

            <Route path="/credit-cards">
              <CreditCards />
            </Route>

            <Route path="/auth">
              <AuthPage />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </Theme>
    </div>
  );
}

export default App;
