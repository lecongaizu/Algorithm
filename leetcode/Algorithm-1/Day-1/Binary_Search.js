/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if(nums.indexOf(target) >= 0){
       return nums.indexOf(target); 
   } else {
       return -1
   }
};