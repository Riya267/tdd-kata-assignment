import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  onCalculate: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, onCalculate }) => {
  return (
    <div className="mt-8 flex items-center w-full max-w-lg">
      <input
        type="text"
        placeholder="Enter numbers"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-l-md outline-none focus:border-indigo-500"
      />
      <button
        onClick={onCalculate}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-r-md flex items-center"
      >
        Add
      </button>
    </div>
  );
};

export default InputField;