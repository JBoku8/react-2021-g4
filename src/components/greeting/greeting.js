const Greeting = ({
  title = 'default title',
  description = 'default description',
}) => (
  <div className="row greeting-container">
    <h1 className="text-success" title={title}>
      {title}
    </h1>
    <h4 className="text-muted" title={description}>
      {description}
    </h4>
  </div>
);

export default Greeting;
