import Counter from '../../components/counter';
import Welcome from '../../components/welcome';
import Greeting from '../../components/greeting';
import { Loader } from '../../components/loader';
import { useBackgroundColor } from '../../hooks/useBackgroundColor';
import { useFetch } from '../../hooks/useFetch';

import './home-page.css';

function HomePage() {
  useBackgroundColor('lightblue');
  const { data, error, loading } = useFetch(
    `${process.env.REACT_APP_FAKER_API}/companies?_quantity=500`,
  );

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

      <Welcome message="Hello everybody..." color="carminePink" />
      <hr />

      {renderCompanies()}

      <Counter />
    </div>
  );
}

export default HomePage;
