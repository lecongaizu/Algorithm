/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */


function dfs(index, array, k, stack, mem) {
    if (stack.length === k) { mem.push(stack.slice()); return; }
    for (let i = index; i < array.length; i++) {
        stack.push(array[i]);
        dfs(i + 1, array, k, stack, mem);
        stack.pop();
    }
}


var combine = function (n, k) {
    const array = [];
    let stack = [];
    let mem = [];
    for (let i = 0; i < n; i++) {
        array.push(i + 1);
    }
    dfs(0, array, k, stack, mem);
    return mem;
}