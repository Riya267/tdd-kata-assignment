import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ErrorDisplay from '.'; 

describe('ErrorDisplay Component', () => {
  test('renders error message when error prop is provided', () => {
    render(<ErrorDisplay error="An error occurred!" />);

    const errorMessage = screen.getByText(/An error occurred!/i);
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('text-red-500');
  });

  test('does not render anything when error prop is null', () => {
    const { container } = render(<ErrorDisplay error={null} />);
    
    expect(container).toBeEmptyDOMElement();
  });

  test('does not render anything when error prop is an empty string', () => {
    const { container } = render(<ErrorDisplay error="" />);
    
    expect(container).toBeEmptyDOMElement();
  });
});
