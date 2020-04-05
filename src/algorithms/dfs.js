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

        if (elRow - 1 >= 0 && !visited.find((cell) => cell.row === elRow - 1 && cell.col === elCol)) {
            stacked.push(matrix[elRow - 1][elCol]);
            onStack(elRow - 1, elCol);
        }

        if (elCol + 1 < matrix[0].length && !visited.find((cell) => cell.row === elRow && cell.col === elCol + 1)) {
            stacked.push(matrix[elRow][elCol + 1]);
            onStack(elRow, elCol + 1);
        }

        if (elRow + 1 < matrix.length && !visited.find((cell) => cell.row === elRow + 1 && cell.col === elCol)) {
            stacked.push(matrix[elRow + 1][elCol]);
            onStack(elRow + 1, elCol);
        }

        if (elCol - 1 >= 0 && !visited.find((cell) => cell.row === elRow && cell.col === elCol - 1)) {
            stacked.push(matrix[elRow][elCol - 1]);
            onStack(elRow, elCol - 1);
        }

        dfs(visited, stacked);
    }
}

