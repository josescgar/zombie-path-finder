import React, { useState, useEffect, useReducer, } from 'react';
import Cell from './Cell';

const initialBoardState = {
    board: []
};

function resetBoard({ rows, columns }) {
    return {
        ...initialBoardState,
        board: Array(rows).fill()
            .map((_, i) => {
                return Array(columns).fill()
                    .map((_, j) => ({
                        id: `${i}${j}`,
                        posX: i,
                        posY: j,
                        isStart: false,
                        isFinish: false,
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

    const {
        rows,
        columns
    } = props;

    const [boardState, boardDispatch] = useReducer(boardReducer, initialBoardState);

    useEffect(() => {
        boardDispatch({ type: 'reset', payload: { rows, columns }});
    }, [rows, columns]);

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