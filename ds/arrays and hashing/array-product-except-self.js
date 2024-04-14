nums = [1,2,3,4]
nums2 = [-1,1,0,-3,3]

function product(nums) {

    const len = nums.length;

    const final = []

    let prod = 1;

    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0)
            prod = prod * nums[i];
    }


    for (let j = 0; j < len; j++) {
        const item = nums[j]
        final.push(prod/item);
    }


    return final;
}

console.log(product(nums2))