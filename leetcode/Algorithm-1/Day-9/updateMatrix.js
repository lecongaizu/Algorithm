/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    const m = mat.length, n = mat[0].length;
    
    const isValid = (x, y) => !(x < 0 || y < 0 || x >= m || y >= n);
    const dir = [0, 1, 0, -1, 0];
    
    const MAX = m * n;
    const dis = new Array(m).fill(-1).map(() => new Array(n).fill(MAX));
    const Q = [];
    
    mat.forEach((row, i) => {
        row.forEach((el, j) => {
            if(mat[i][j] == 0) {
                dis[i][j] = 0;
                Q.push([i, j]);
            }
        })
    });
    
    while(Q.length) {
        const [x, y] = Q.shift();
        const d = dis[x][y];
        for(let i = 0; i < 4; i++) {
            const X = x + dir[i], Y = y + dir[i+1];
            if(isValid(X, Y) && d + 1 < dis[X][Y]) {
                Q.push([X, Y]);
                dis[X][Y] = d + 1;
            }
        }
    }
    
    return dis;
};