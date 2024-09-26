/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    const size = nums.length;

    for (let i = 0; i < size/2; i++) {
        
        if (nums[i] === target) {
            return i;
        }
        else if (nums[size - i - 1] === target) {
            return size - i - 1
        }

    }

    return -1

};

console.log(search([-1,0,3,5,9,12], 9))