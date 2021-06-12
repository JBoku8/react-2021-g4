import { render, screen } from '@testing-library/react';

import Greeting from './greeting';

describe('Greeting component test', () => {
  it('should render with defaults', () => {
    render(<Greeting />);
    const defaultTitle = screen.getByText('default title');
    const defaultDesc = screen.getByText('default description');

    expect(defaultTitle).toBeInTheDocument();
    expect(defaultTitle).toHaveAttribute('title', 'default title');

    expect(defaultDesc).toBeInTheDocument();
    expect(defaultDesc).toHaveAttribute('title', 'default description');
  });

  it('should render with specified props', () => {
    const mockProps = {
      title: 'mock-title',
      description: 'mock-description',
    };
    render(<Greeting {...mockProps} />);
    const defaultTitle = screen.getByText(mockProps.title);
    const defaultDesc = screen.getByText(mockProps.description);

    expect(defaultTitle).toBeInTheDocument();
    expect(defaultDesc).toBeInTheDocument();
  });
});
