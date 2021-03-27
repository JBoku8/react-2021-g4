import "./welcome.css";

function Welcome({ color, message }) {
  const colors = ["deepCove", "steelPink", "carminePink", "pureApple"];

  // if (!colors.includes(color)) {
  //   return (
  //     <div className="alert alert-danger">
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
  //         perspiciatis earum illo optio ducimus. Aliquid praesentium officiis
  //         debitis voluptas, iusto tenetur, voluptatem magni est molestias
  //         mollitia, temporibus necessitatibus consectetur repudiandae.
  //       </p>
  //     </div>
  //   );
  // }

  const renderError = () => {
    return (
      <div className="alert alert-danger">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          perspiciatis earum illo optio ducimus. Aliquid praesentium officiis
          debitis voluptas, iusto tenetur, voluptatem magni est molestias
          mollitia, temporibus necessitatibus consectetur repudiandae.
        </p>
      </div>
    );
  };

  const renderSuccess = () => {
    return (
      <div className="row">
        <h1 className={["fs-1", `text-${color}`].join(" ")}>{message}</h1>
      </div>
    );
  };

  return <>{!colors.includes(color) ? renderError() : renderSuccess()}</>;
}

export default Welcome;
