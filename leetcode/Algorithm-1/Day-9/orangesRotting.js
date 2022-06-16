/**
 * @param {number[][]} grid
 * @return {number}
 */
 const dx=[0, 0, 1, -1];
 const dy=[1, -1, 0, 0];
 
 var orangesRotting = function(grid) {
     const row = grid[0].length;
     const col = grid.length;
     const q = [];
     const dist = [...Array(col)].map(() => Array(row).fill(0));
     for (let i=0; i < col; i++) {
         for (let j=0; j < row; j++) {
             // If it is a rotten orange, put it in a queue and search for fresh oranges around it
             if (grid[i][j] === 2) {
                 q.push([i,j]);
             }
             // Set the fresh orange date and time dist[i][j] value to -1
             // Running the BFS loop, a node with a value of -1 is an unvisited fresh orange.
             if (grid[i][j] === 1) {
                 dist[i][j] = -1;
             }
         }
     }
     
     // While running the BFS loop, there must be only rotten oranges in the queue.
     // To reduce the time complexity, pointer is used instead of shift method.
     let head = 0;
     while (q.length > head) {
         const [x,y] = q[head++];
         for (let k=0; k<4; k++) {
             const nx = x + dx[k];
             const ny = y + dy[k];
             if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
             // Skip if dist[nx][ny] is not an unvisited fresh orange.
             if (dist[nx][ny] >= 0) continue;
             // Add 1 minute to the previous orange's value.
             dist[nx][ny] = dist[x][y] + 1;
             // To visit an adjacent orange, put the orange's coordinates in the queue.
             q.push([nx,ny]);
         }
     }
     
     // Returns the minutes until all oranges are rotten. Just print the largest value in dist.
     let day = 0;
     for (let i=0; i < col; i++) {
         for (let j=0; j < row; j++) {
             // Returns -1 if there are unrotten oranges.
             if (dist[i][j] === -1) return -1;
             day = Math.max(day, dist[i][j]);
         }
     }
     return day;
 };