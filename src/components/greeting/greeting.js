import { TEST_IDS } from '../../utils/testids';

const Greeting = ({
  title = 'default title',
  description = 'default description',
}) => (
  <div className="row greeting-container">
    <h1
      className="text-success"
      title={title}
      data-testid={TEST_IDS.greeting.title}>
      {title}
    </h1>
    <h4
      className="text-muted"
      title={description}
      data-testid={TEST_IDS.greeting.description}>
      {description}
    </h4>
  </div>
);

export default Greeting;
