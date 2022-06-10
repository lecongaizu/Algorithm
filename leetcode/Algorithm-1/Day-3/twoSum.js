/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = {}
    let remaining
    for(let i = 0; i < numbers.length; i++){
        remaining = target - numbers[i]
        if(map[numbers[i]] !== undefined) return [map[numbers[i]] + 1, i + 1]
        else map[remaining] = i
    }
    
};