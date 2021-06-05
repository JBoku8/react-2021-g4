import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../components/counter';
import Welcome from '../../components/welcome';
import Greeting from '../../components/greeting';
import { Loader } from '../../components/loader';
import { useBackgroundColor } from '../../hooks/useBackgroundColor';
import { useFetch } from '../../hooks/useFetch';
import { getUsersActionAsync } from '../../redux/actions';
import { usersSelector } from '../../redux/selectors';

import './home-page.css';

function HomePage() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  useBackgroundColor('lightblue');
  const { data, error, loading } = useFetch(
    `${process.env.REACT_APP_FAKER_API}/companies?_quantity=100`,
  );

  useEffect(() => {
    dispatch(getUsersActionAsync(100));
  }, [dispatch]);

  const renderCompanies = () => {
    if (error) {
      return (
        <div className="alert alert-danger">
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      );
    }

    if (loading || !data) {
      return <Loader message="Data is loading..." />;
    }

    return (
      <div className="row col-12">
        <h2 className="text-dark">
          Companies Loaded, Total qty: {data.data.length}
        </h2>
      </div>
    );
  };

  return (
    <div className="row">
      <Greeting
        title="Home Page."
        description="home page is my awesome page!"
      />
      <Greeting
        title="Async users data using redux-thunk"
        description={`total amount is ${users.length}`}
      />

      <Welcome message="Hello everybody..." color="carminePink" />
      <hr />

      {renderCompanies()}

      <Counter />
    </div>
  );
}

export default HomePage;
