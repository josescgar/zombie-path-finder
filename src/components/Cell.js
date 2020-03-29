import React from 'react';

function Cell(props) {

    const {
        cell: {
            posX,
            posY
        }
    } = props;


    return (
        <div>Row: {posX} Column: {posY}</div>
    )

}

export default Cell;