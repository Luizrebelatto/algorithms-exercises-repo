#  217 Contains Duplicate - [Link exercise](https://leetcode.com/problems/contains-duplicate/description/)

---

## Result expected
This code read an integer and verify if exist a number duplicate, if exist return true and if is not return false

## Solution
- Use HashMap to solve this exercise, more especific `Set()`
- Create empty `Set()`, `Set()` is an structure of data that does not repeat elements, so we create an empty and then will add if the number doest exist in the structure.
```
var containsDuplicate = function(nums) {
    const hashArray = new Set();
};
```
- We need to iterate array, so use some loop;
```
    var containsDuplicate = function(nums) {
        const hashArray = new Set();
        for(i=0; i <= nums.length; i++){
            
        }
    };
```
- you need verify if that element already exist and for this we use the method `has()` that is included in `Set()`
- if the number already exist return true,
- if the number doesnt exist, the code exits the `if` and jumps to another instruction which is to add this number to the `hashArray`
```
    var containsDuplicate = function(nums) {
        const hashArray = new Set();
        for(i=0; i <= nums.length; i++){
            if(hashArray.has(nums[i])) {
                return true
            }
            hashArray.add(nums[i])
        }
        return false
    };
```
- And finally, if the array doesnt have duplicate number, the code will go through the loop without finding duplicates and then return `false`