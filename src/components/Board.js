import React, { useEffect, useReducer, useState } from 'react';
import { DFSSearch } from '../algorithms';
import { Stepper } from '../utils';
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
                        row: i,
                        col: j,
                        isStart: i === start.row && j === start.column,
                        isFinish: i === finish.row && j === finish.column,
                        isBlocked: false,
                        isVisited: false,
                        isStacked: false,
                        isPath: false
                    }));
            })
    };
}

function boardReducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'visit':
        case 'stack':
        case 'path':
        case 'block':
            return {
                ...state,
                board: state.board.map((row, i) => {
                    return i !== payload.row ? row : row.map((cell, j) => {
                        return j !== payload.column ? cell : {
                            ...cell,
                            isVisited: type === 'visit' || cell.isVisited,
                            isStacked: type === 'stack' || cell.isStacked,
                            isPath: type === 'path' || cell.isPath,
                            isBlocked: type === 'block' || cell.isBlocked
                        };
                    })
                })
            };
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

    function calculatePath() {
        const stepper = new Stepper(boardDispatch, props.setup.stepDelay);

        const path = DFSSearch(
            boardState.board,
            props.setup.start,
            props.setup.finish,
            (row, column) => stepper.exec({ type: 'visit', payload: { row, column } }),
            (row, column) => stepper.exec({ type: 'stack', payload: { row, column } })
        );

        path.forEach((cell) => stepper.exec({ type: 'path', payload: { row: cell.row, column: cell.col } }));
    }

    function blockCell(cell) {
        boardDispatch({ type: 'block', payload: { row: cell.row, column: cell.col }});
    }

    return (
        <div>
            <div>
                <button onClick={calculatePath}>Calculate</button>
            </div>
            <div className="board" style={gridStyle}>
                {boardState.board.map((row) => {
                    return row.map((cell) => (
                        <Cell cell={cell} key={cell.id} onClick={() => blockCell(cell)}/>
                    ))
                })}
            </div>
        </div>
    );
}

export default Board;