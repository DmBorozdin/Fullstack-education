const graph = [[0, 1, 6, Infinity], [Infinity, 0, 4, 1], [Infinity, Infinity, 0, Infinity], [Infinity, Infinity, 1, 0]];
const graph2 = [
    [0, 5, Infinity, Infinity, Infinity, Infinity, Infinity], 
    [Infinity, 0, 1, 8, Infinity, Infinity, 1], 
    [Infinity, Infinity, 0, Infinity, Infinity, Infinity, Infinity], 
    [Infinity, 8, Infinity, 0, 4, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, 0, 2, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, 0, Infinity],
    [Infinity, Infinity, Infinity, Infinity, 2, Infinity, 0]
];

const getArrShortestDistance = (graph) => {
    const D = new Array(graph.length).fill(0);
    graph.forEach((arr, i) => D[i] = arr.slice());
    for (let k = 0; k < graph.length; k++) {
        for (let i = 0; i < graph.length; i++) {
            for (let j = 0; j < graph.length; j++) {
                D[i][j] = Math.min(D[i][j], D[i][k] + D[k][j]);
            }
        }
    }
    return D;
}

arrShortestDistance = getArrShortestDistance(graph2);

const getShortestPath = (a, b) => {
    if (a < 1 || b < 1 || a > arrShortestDistance.length || b > arrShortestDistance.length || arrShortestDistance[a - 1][b - 1] === Infinity) {
        return 'No path found';
    }

    return arrShortestDistance[a - 1][b - 1];
}
console.log(getShortestPath(2, 6));