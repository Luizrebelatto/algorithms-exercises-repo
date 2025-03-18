# Binary Search - [Link exercise](https://leetcode.com/problems/palindrome-number/)

---

## Want to know more about binary search?
- Read my article [The power of binary search](https://dev.to/luizrebelatto/the-power-of-binary-search-1b5d)

## Result expected
- Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

## Solution
- First step you define the left and right variables, left is the first element and right is the second element. Just take the size of the array - 1

```
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1
}
```




<!-- function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((right + left) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
} -->
