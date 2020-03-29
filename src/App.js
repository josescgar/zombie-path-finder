import React, { useState } from 'react';
import Board from './components/Board';

function App() {
  const [setup] = useState({
    rows: 10,
    columns: 16,
    start: { row: 2, column: 3 },
    finish: { row: 7, column: 12 }
  });

  return (
    <div>
      <Board setup={setup} />
    </div>
  );
}

export default App;
