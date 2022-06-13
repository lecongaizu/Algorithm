/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    let start = image[sr][sc];
    image[sr][sc] = newColor;
    dfs(image, sr, sc, start, newColor);
    return image;
};

function dfs(image, sr, sc, start, newColor) {
    if (isValid(image, sr-1, sc, start, newColor)) {
        image[sr-1][sc] = newColor;
        dfs(image, sr-1, sc, start, newColor);
    }
    if (isValid(image, sr+1, sc, start, newColor)) {
        image[sr+1][sc] = newColor;
        dfs(image, sr+1, sc, start, newColor);
    }
    if (isValid(image, sr, sc-1, start, newColor)) {
        image[sr][sc-1] = newColor;
        dfs(image, sr, sc-1, start, newColor);
    }
    if (isValid(image, sr, sc+1, start, newColor)) {
        image[sr][sc+1] = newColor;
        dfs(image, sr, sc+1, start, newColor);
    }
}

function isValid(image, x, y, startColor, newColor) {
    if (x >= 0 && x < image.length && y >= 0 && y < image[0].length && image[x][y] === startColor && image[x][y] !== newColor) {
        return true;
    } else {
        return false;
    }
}