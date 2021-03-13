import React from "react";
import Welcome from "./Welcome";
import "./App.css";

function App() {
  // const h2 = React.createElement("h2", null, "ReactJs introduction");
  // const div = React.createElement("div", null, h2);

  const h2Styles = {
    color: "yellowgreen",
    padding: "20px",
    border: "1px solid black",
    maxWidth: "50%",
    margin: "auto",
  };

  return (
    <div className="App">
      <Welcome message="Hello everybody..." color="red" />
      <hr />
      <Welcome message="ReactJs rocks" color="cadetblue" />
      <div>
        <h2 className="h2Styles">ReactJs Introduction</h2>
      </div>
      <Welcome message="Custom Component" color="brown" />
    </div>
  );
}

export default App;
