import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page';

import Theme from './components/theme/theme';
import NotesProvider from './contexts/NotesProvider';
import { Loader } from './components/loader';
import * as routePath from './utils/routePaths';

const NotesPage = React.lazy(() => import('./pages/notes-page'));
const ClassCounter = React.lazy(() => import('./pages/class-counter'));
const Profile = React.lazy(() => import('./pages/profile'));
const AuthPage = React.lazy(() => import('./pages/auth'));
const CreditCards = React.lazy(() => import('./pages/credit-cards'));
const ReduxCounter = React.lazy(() => import('./pages/redux-counter'));

function Routes() {
  return (
    <Theme>
      <Suspense fallback={<Loader message="Page is loading..." />}>
        <Switch>
          <Route path={routePath.COUNTER_PATH}>
            <ClassCounter title="class component example" initialValue={10} />
          </Route>

          <Route path={routePath.NOTES_PATH}>
            <NotesProvider>
              <NotesPage />
            </NotesProvider>
          </Route>

          <Route path={routePath.PROFILE_PATH}>
            <Profile title="Secured Profile Page" />
          </Route>

          <Route path={routePath.CREDIT_CARDS_PATH}>
            <CreditCards />
          </Route>

          <Route path={routePath.REDUX_COUNTER_PATH}>
            <ReduxCounter />
          </Route>

          <Route path={routePath.AUTH_PATH}>
            <AuthPage />
          </Route>

          <Route path={routePath.HOME_PATH}>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Theme>
  );
}

export default Routes;
