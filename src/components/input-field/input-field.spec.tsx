import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import InputField from '.';

describe('InputField Component', () => {
  const mockOnChange = jest.fn();
  const mockOnCalculate = jest.fn();

  beforeEach(() => {
    render(
      <InputField
        value=""
        onChange={mockOnChange}
        onCalculate={mockOnCalculate}
      />
    );
  });

  test('renders input field and button', () => {
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByRole('button', { name: /Add/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onChange when input value changes', () => {
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    
    fireEvent.change(inputElement, { target: { value: '1,2,3' } });
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('1,2,3');
  });

  test('calls onCalculate when button is clicked', () => {
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    
    fireEvent.click(buttonElement);
    
    expect(mockOnCalculate).toHaveBeenCalledTimes(1);
  });
});
