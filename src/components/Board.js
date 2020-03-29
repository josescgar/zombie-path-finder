import React, { useEffect, useReducer } from 'react';
import Cell from './Cell';

const initialBoardState = {
    board: []
};

function resetBoard(setup) {
    const { rows, columns, start, finish } = setup;

    return {
        ...initialBoardState,
        board: Array(rows).fill()
            .map((_, i) => {
                return Array(columns).fill()
                    .map((_, j) => ({
                        id: `${i}${j}`,
                        posX: i,
                        posY: j,
                        isStart: i === start.row && j === start.column,
                        isFinish: i === finish.row && j === finish.column,
                        isBusy: false  
                    }));
            })
    };
}

function boardReducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'reset':
            return resetBoard(payload);
        default:
            return state;
    }
}

function Board(props) {

    const [boardState, boardDispatch] = useReducer(boardReducer, initialBoardState);

    useEffect(() => {
        boardDispatch({ type: 'reset', payload: props.setup });
    }, [props.setup]);

    return (
        <div className="board">
            {boardState.board.map((row) => {
                return row.map((cell) => (
                    <Cell cell={cell} key={cell.id}/>
                ))
            })}
        </div>
    );
}

export default Board;