import React from 'react';
import classNames from 'classnames';

function Cell(props) {

    const {
        cell: {
            posX,
            posY,
            isStart,
            isFinish,
            isVisited,
            isStacked
        }
    } = props;

    const classes = classNames('cell', {
        'is-visited': isVisited,
        'is-stacked': isStacked
    });

    return (
        <div className={classes}>
            {posX}-{posY}
            { isStart && <span role="img" aria-label="start"> 🏃‍♂️</span> }
            { isFinish && <span role="img" aria-label="finish"> 🏁</span> }
        </div>
    )

}

export default Cell;