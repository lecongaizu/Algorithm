/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const temp = [];

    for (let i = 0; i < nums.length; i++) {
        const j = ((nums.length) - (k % nums.length) + i)% nums.length;
        temp[i] = nums[j];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }
    return nums
};

// Solution 2* 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    for (let i = 1; i<= k; i++) {
         nums.unshift(nums.pop())
     }
     return nums;
};