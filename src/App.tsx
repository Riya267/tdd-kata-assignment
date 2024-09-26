import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <img src={require('./assets/incubyte.svg').default} alt='Incubyte Logo' />
      <h1 className="text-4xl font-bold text-center mt-8">String Calculator</h1>
      <p className="text-gray-600 text-lg text-center mt-4 max-w-2xl">
        Enter numbers separated by commas or new lines. You can also specify a custom delimiter.
      </p>
    </div>
  );
};

export default App;
