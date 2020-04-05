export function DFSSearch(matrix, start, finish, onVisit, onStack) {
    const visited = [];
    const stacked = [];

    const initial = matrix[start.row][start.column];
    
    stacked.push(initial);
    onStack(initial.row, initial.col);

    dfs(visited, stacked);
    
    return visited;

    function dfs(visited, stacked) {

        if (stacked.length === 0) {
            return;
        }

        const element = stacked.pop();
        const { row: elRow, col: elCol } = element;

        if (elRow === finish.row && elCol === finish.column) {
            return;
        }

        visited.push(element);
        onVisit(elRow, elCol);

        const top = matrix[elRow - 1] && matrix[elRow - 1][elCol];
        if (top && visited.indexOf(top) === -1 && !top.isBlocked) {
            stacked.push(top);
            onStack(top.row, top.col);
        }

        const right = matrix[elRow][elCol + 1];
        if (right && visited.indexOf(right) === -1 && !right.isBlocked) {
            stacked.push(right);
            onStack(right.row, right.col);
        }

        const bottom = matrix[elRow + 1] && matrix[elRow + 1][elCol];
        if (bottom && visited.indexOf(bottom) === -1 && !bottom.isBlocked) {
            stacked.push(bottom);
            onStack(bottom.row, bottom.col);
        }

        const left = matrix[elRow][elCol - 1];
        if (left && visited.indexOf(left) === -1 && !left.isBlocked) {
            stacked.push(left);
            onStack(left.row, left.col);
        }

        dfs(visited, stacked);
    }
}

