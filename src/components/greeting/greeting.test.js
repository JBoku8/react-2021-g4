import { render } from '@testing-library/react';
import { TEST_IDS } from '../../utils/testids';

import Greeting from './greeting';

describe('Greeting component test', () => {
  it('should render with defaults', () => {
    const component = render(<Greeting />);
    const defaultTitle = component.getByTestId(TEST_IDS.greeting.title);
    const defaultDesc = component.getByTestId(TEST_IDS.greeting.description);

    expect(defaultTitle).toBeInTheDocument();
    expect(defaultTitle).toHaveTextContent('default title');
    expect(defaultTitle).toHaveAttribute('title', 'default title');

    expect(defaultDesc).toBeInTheDocument();
    expect(defaultDesc).toHaveAttribute('title', 'default description');
  });

  it('should render with specified props', () => {
    const mockProps = {
      title: 'mock-title',
      description: 'mock-description',
    };
    const component = render(<Greeting {...mockProps} />);
    const defaultTitle = component.getByTestId(TEST_IDS.greeting.title);
    const defaultDesc = component.getByTestId(TEST_IDS.greeting.description);

    expect(defaultTitle).toHaveTextContent(mockProps.title);
    expect(defaultDesc).toHaveTextContent(mockProps.description);
  });
});
