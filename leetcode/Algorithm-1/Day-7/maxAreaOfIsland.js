var maxAreaOfIsland = function (grid) {
    
    const max_row_length = grid[0].length - 1;
    const max_grid_height = grid.length - 1;

    let max_island_area = 0;
    let island_node_counter = 0;

    
    const explore_island_DFS = (row_index, col_index) => {
        
        
        if (row_index > max_grid_height || col_index > max_row_length || row_index < 0 || col_index < 0) {
            
            return 0;
        }

       
        if (grid[row_index][col_index] === 0) {
            return 0;
        }

        
        grid[row_index][col_index] = 0;

        
        island_node_counter += 1;

        explore_island_DFS(row_index - 1, col_index); // Up
        explore_island_DFS(row_index + 1, col_index); // Down
        explore_island_DFS(row_index, col_index - 1); // Left
        explore_island_DFS(row_index, col_index + 1); // Right

        
        max_island_area = Math.max(island_node_counter, max_island_area);
    };

   
    grid.forEach((row, row_index) => {
        row.forEach((col, col_index) => {

            
            if (col === 1) {
                island_node_counter = 0; // This will be the number of nodes in this island.
                explore_island_DFS(row_index, col_index);
            }
        });
    });

    return max_island_area;
};
