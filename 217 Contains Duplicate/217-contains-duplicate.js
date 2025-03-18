var containsDuplicate = function(nums) {
    const hashArray = new Set();

    for(i=0;i <= nums.length; i++){
        if(hashArray.has(nums[i])) return true
        hashArray.add(nums[i])
    }
    return false;
};