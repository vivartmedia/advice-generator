

import React from 'react';
import './styles/styles.css'; // or './styles/tailwind.css' if using Tailwind CSS
import AdviceGenerator from './components/AdviceGenerator';

const App: React.FC = () => {
  return (
    <div className="App">
      <AdviceGenerator />
    </div>
  );
};

export default App;

