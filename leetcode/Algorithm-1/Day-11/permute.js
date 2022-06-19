/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, perm = [], perms = []) {
    if (!nums.length && perm.length !== 0) perms.push(perm)
    else
        for (let i = 0; i < nums.length; i++) {
            const newArray = nums.filter((_, idx) => idx !== i)
            const newPerm = perm.concat(nums[i])
            permute(newArray, newPerm, perms)
        }
    return perms
};

