import React, { useState } from 'react';
import Board from './components/Board';

function App() {
  const [setup] = useState({
    rows: 8,
    columns: 10,
    start: { row: 2, column: 3 },
    finish: { row: 7, column: 1 }
  });

  return (
    <div className="App">
      <Board setup={setup} />
    </div>
  );
}

export default App;
