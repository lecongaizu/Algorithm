/**
 * @param {number[]} nums
 * @return {number}
 */
var rec = function (i, arr, dp) {
    if (i < 0) return 0;
    if (i == 0) return arr[i];
    if (dp[i] !== -1) return dp[i];
    let take = arr[i] + rec(i - 2, arr, dp);
    let notTake = 0 + rec(i - 1, arr, dp);
    return dp[i] = Math.max(take, notTake)
}
var rob = function (nums) {
    let n = nums.length;
    let sol = Array(n).fill(-1);
    return rec(n - 1, nums, sol)
}

// Space optimized

var rob = function (nums) {
    let prev2 = 0;
    let prev = nums[0];
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        let take = nums[i];
        if (i > 1) take += prev2;
        let notTake = 0 + prev;
        max = Math.max(take, notTake);
        prev2 = prev;
        prev = max;
    }
    return prev
};