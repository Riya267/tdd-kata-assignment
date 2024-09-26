import React from 'react';

interface ResultDisplayProps {
  result: number | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  if (result === null) return null;
  return <p className="text-green-500 text-lg mt-2">Result: {result}</p>;
};

export default ResultDisplay;
