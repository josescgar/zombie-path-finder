import React, { useState } from 'react';
import Board from './components/Board';

function App() {
  const [setup] = useState({
    rows: 10,
    columns: 16,
    start: { row: 1, column: 14 },
    finish: { row: 7, column: 12 },
    stepDelay: 10
  });

  return (
    <div>
      <Board setup={setup} />
    </div>
  );
}

export default App;
