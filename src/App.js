import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Board rows={8} columns={10} />
    </div>
  );
}

export default App;
