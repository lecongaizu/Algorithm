/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let start = 0; 
    let end = nums.length - 1
    let mid = parseInt(nums.length / 2)
    let possibleStart = 0;
    if(target > nums[nums.length - 1]) {
        return nums.length
    }
    
    if(target < nums[0]) {
        return 0;
    }
    
    while(start < nums.length) {
        if(nums[start] == target) {
            return start
        }
        else if(nums[end] == target) {
            return end
        }

        if(target > nums[start]) {
            possibleStart = start + 1
        }

        end--;
        start++;
    }
    return possibleStart
    
};