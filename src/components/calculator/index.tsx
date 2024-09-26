import React, { useState } from 'react';
import { add } from '../../utils/add/add';
import InputField from '../input-field';
import ResultDisplay from '../result-display'
import ErrorDisplay from '../error-display'

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      setResult(null);
    }
  };
  

  return (
    <div>
      <InputField value={input} onChange={setInput} onCalculate={handleCalculate} />
      <ErrorDisplay error={error} />
      <ResultDisplay result={result} />
      <p className="text-gray-400 text-sm mt-2">ProTip: Use new lines or custom delimiters for separation.</p>
    </div>
  );
};

export default Calculator;
