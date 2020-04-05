export function Stepper(fn, delay) {
    
    const queue = [];
    let isExecuting = false;

    function exec(...args) {

        queue.push([...args]);
        move();
    };

    function move() {
        if (queue.length === 0 || isExecuting) {
            return;
        }

        isExecuting = true;
        const next = queue.shift();
        setTimeout(() => {
            fn(...next);
            isExecuting = false;
            move();
        }, delay);
    }

    return {
        exec
    };
}