import Counter from "../../components/counter";
import Welcome from "../../components/welcome";
import Greeting from "../../components/greeting";

import "./home-page.css";

function HomePage(props) {
  return (
    <div className="row">
      <Greeting
        title="Home Page."
        description="home page is my awesome page!"
      />
      <Welcome message="Hello everybody..." color="carminePink" />
      <hr />
      <Counter />
    </div>
  );
}

export default HomePage;
