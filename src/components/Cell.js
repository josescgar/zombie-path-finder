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
        <div className={props.className}>
            {posX}-{posY}
            { isStart && <span role="img" aria-label="start"> 🏃‍♂️</span> }
            { isFinish && <span role="img" aria-label="finish"> 🏁</span> }
        </div>
    )

}

export default Cell;