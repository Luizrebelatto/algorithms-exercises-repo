var twoSum = function(nums, target) {
    const hashNum = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (hashNum.has(complement)) {
            return [hashNum.get(complement), i];
        }

        hashNum.set(nums[i], i);
    }
};