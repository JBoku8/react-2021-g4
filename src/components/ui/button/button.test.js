import { render } from '@testing-library/react';

import Button from './button';

describe('Button component test', () => {
  it('should render with defaults', () => {
    const component = render(<Button />);
    expect(component.queryByRole('button')).toBeInTheDocument();
    expect(component.queryByRole('button')).toHaveAttribute('type', 'button');
    expect(component.queryByRole('button')).toHaveAttribute(
      'class',
      'btn btn-primary',
    );
    expect(component.queryByRole('button')).toHaveTextContent('N/A');
  });

  it('should render with specified props', () => {
    const mockProps = {
      type: 'submit',
      className: 'mock-class',
      text: 'mock-text',
    };
    const component = render(<Button {...mockProps} />);
    expect(component.queryByRole('button')).toBeInTheDocument();
    expect(component.queryByRole('button')).toHaveAttribute(
      'type',
      mockProps.type,
    );
    expect(component.queryByRole('button')).toHaveAttribute(
      'class',
      mockProps.className,
    );
    expect(component.queryByRole('button')).toHaveTextContent(mockProps.text);
  });

  it('should render execute onClick handler when click is triggered', () => {
    const onClickHandler = jest.fn();
    const mockProps = {
      type: 'submit',
      className: 'mock-class',
      text: 'mock-text',
    };
    const component = render(
      <Button {...mockProps} onClick={onClickHandler} />,
    );
    const buttonElement = component.getByRole('button');
    buttonElement.click();

    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
