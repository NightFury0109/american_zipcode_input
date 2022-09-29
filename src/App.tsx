import React from 'react';

import './App.scss';

import ZipcodeInput from './components/input/ZipcodeInput';

const App: React.FC = () => {
  return (
    <div className="App">
      <ZipcodeInput />
    </div>
  );
}

export default App;
