import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  onCalculate: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, onCalculate }) => {
  return (
    <div className="mt-8 flex items-center w-full max-w-lg mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
      <input
        type="text"
        placeholder="Enter numbers"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-l-lg outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out placeholder-gray-400"
      />
      <button
        onClick={onCalculate}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-r-lg transition duration-300 ease-in-out flex items-center"
      >
        Add
      </button>
    </div>
  );
};

export default InputField;
