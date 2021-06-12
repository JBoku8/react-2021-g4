import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader component test', () => {
  it('should render with defaults', () => {
    const component = render(<Loader />);

    expect(component.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render with specified props', () => {
    const message = 'Page is loading...';
    const component = render(<Loader message={message} />);

    expect(component.getByText(message)).toBeInTheDocument();
  });
});
