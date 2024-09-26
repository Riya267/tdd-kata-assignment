import React from 'react';

interface ErrorDisplayProps {
  error: string | null;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (!error) return null;
  return <p className="text-red-500 text-sm mt-2">{error}</p>;
};

export default ErrorDisplay;
