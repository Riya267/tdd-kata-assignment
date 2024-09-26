import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '.';
import { add } from '../../utils/add/add';
import '@testing-library/jest-dom'

jest.mock('../../utils/add/add');

describe('Calculator Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the calculator component', () => {
    render(<Calculator />);
    
    expect(screen.getByPlaceholderText(/Enter numbers/i)).toBeInTheDocument();
    expect(screen.getByText(/ProTip: Use new lines or custom delimiters for separation/i)).toBeInTheDocument();
  });

  test('calculates sum correctly', () => {
    (add as jest.Mock).mockReturnValue(6);

    render(<Calculator />);
    
    const inputField = screen.getByPlaceholderText(/Enter numbers/i);
    const button = screen.getByRole('button', { name: /add/i });
    
    fireEvent.change(inputField, { target: { value: '1,2,3' } });
    fireEvent.click(button);

    expect(add).toHaveBeenCalledWith('1,2,3');
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
  });

  test('displays error message for negative numbers', () => {
    (add as jest.Mock).mockImplementation(() => {
      throw new Error("negative numbers not allowed: -1, -2");
    });

    render(<Calculator />);
    
    const inputField = screen.getByPlaceholderText(/Enter numbers/i);
    const button = screen.getByRole('button', { name: /add/i });

    fireEvent.change(inputField, { target: { value: '-1,-2' } });
    fireEvent.click(button);

    expect(screen.getByText(/negative numbers not allowed: -1, -2/i)).toBeInTheDocument();
    expect(screen.queryByText(/Result:/i)).toBeNull();
  });

  test('handles unknown errors gracefully', () => {
    (add as jest.Mock).mockImplementation(() => {
      throw new Error("An unknown error occurred.");
    });

    render(<Calculator />);
    
    const inputField = screen.getByPlaceholderText(/Enter numbers/i);
    const button = screen.getByRole('button', { name: /add/i });

    fireEvent.change(inputField, { target: { value: '5,6' } });
    fireEvent.click(button);

    expect(screen.getByText(/An unknown error occurred/i)).toBeInTheDocument();
    expect(screen.queryByText(/Result:/i)).toBeNull();
  });
});
