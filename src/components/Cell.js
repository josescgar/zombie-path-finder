import React from 'react';
import classNames from 'classnames';

function Cell(props) {

    const {
        cell: {
            row,
            col,
            isStart,
            isFinish,
            isVisited,
            isStacked,
            isPath
        }
    } = props;

    const classes = classNames('cell', {
        'is-visited': isVisited,
        'is-stacked': !isVisited && isStacked,
        'is-path': isPath
    });

    return (
        <div className={classes}>
            {row}-{col}
            { isStart && <span role="img" aria-label="start"> 🏃‍♂️</span> }
            { isFinish && <span role="img" aria-label="finish"> 🏁</span> }
        </div>
    )

}

export default Cell;