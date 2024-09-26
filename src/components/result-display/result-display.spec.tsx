import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ResultDisplay from '.';

describe('ResultDisplay Component', () => {
  test('renders the result when it is a number', () => {
    render(<ResultDisplay result={42} />);
    const resultElement = screen.getByText(/Result: 42/i);
    expect(resultElement).toBeInTheDocument();
    expect(resultElement).toHaveClass('text-green-500 text-lg mt-2');
  });

  test('does not render anything when result is null', () => {
    const { container } = render(<ResultDisplay result={null} />);
    expect(container).toBeEmptyDOMElement();
  });
});
