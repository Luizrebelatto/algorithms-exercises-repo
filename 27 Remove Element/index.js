var removeElement = function(nums, val) {
    let k = 0;
    for(num of nums){
        if (num !== val) {
            nums[k] = num;
            k++;
        }
    }
    return k;
};