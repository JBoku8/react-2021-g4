import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navigation from './components/navigation';
import Routes from './Routes';

import { autoLoginAction } from './redux/actions/middleware-actions';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLoginAction());
  }, [dispatch]);
  return (
    <div className="container">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
