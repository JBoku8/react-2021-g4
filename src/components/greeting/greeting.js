const Greeting = ({ title, description }) => (
  <div className="row greeting-container">
    <h1 className="text-success">{title}</h1>
    <h4 className="text-muted">{description}</h4>
  </div>
);

export default Greeting;
