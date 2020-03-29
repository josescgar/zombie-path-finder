import React, { useEffect, useReducer, useState } from 'react';
import Cell from './Cell';
import './Board.css';

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

    const [gridStyle, setGridStyle] = useState(null);

    useEffect(() => {
        boardDispatch({ type: 'reset', payload: props.setup });
        setGridStyle({
            gridTemplate: `repeat(${props.setup.rows}, 1fr) / repeat(${props.setup.columns}, 1fr)`
        });
    }, [props.setup]);

    return (
        <div className="board" style={gridStyle}>
            {boardState.board.map((row) => {
                return row.map((cell) => (
                    <Cell className="cell" cell={cell} key={cell.id}/>
                ))
            })}
        </div>
    );
}

export default Board;