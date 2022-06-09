/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let covertArray = nums.map(Math.abs).sort((a, b) => a - b)
    let newArray   = covertArray.map(ele => Math.pow(ele, 2))
    return newArray
    
};