import React from 'react';

function Cell(props) {

    const {
        cell: {
            posX,
            posY,
            isStart,
            isFinish
        }
    } = props;


    return (
        <div>
            Row: {posX} Column: {posY}
            { isStart && <span> 🏃‍♂️</span> }
            { isFinish && <span> 🏁</span> }
        </div>
    )

}

export default Cell;