# Palindrom Number - [Link exercise](https://leetcode.com/problems/palindrome-number/)

---

## What is a palindrome?
It is a number or word that if you read backward or forward remain the same

## Result expected
Given an integer x, return true if x is a palindrome, and false otherwise.

## Solution 1
- The parameter the function receiving is of type number, convert this number type to string
```
var isPalindrome = function(x) {
    const invertedNumber = String(x)
};
```
- The parameter now is a string, transform string in an array using the function split. Function split required receive parameter, value takes a pattern and divide string
```
var isPalindrome = function(x) {
    const invertedNumber = String(x).split("")
};
```
- reverse array with method reverse
```
var isPalindrome = function(x) {
    const invertedNumber = String(x).split("").reverse()
};
```
- Now you need join values again, so the join method will be called. This function receive a pattern and join, if you pass `join("")` the function delete comma(,) and then join
```
var isPalindrome = function(x) {
    const invertedNumber = String(x).split("").reverse().join("")
};
```
- The function needs to return a boolean value
```
var isPalindrome = function(x) {
    const invertedNumber = String(x).split("").reverse().join("");
    return Number(invertedNumber) === x;
};
```

# Solution 2
In this solution we will not convert to string, we must consider a few points:

- if number less than zero return false
- if the number ends in zero return false

- First step we will make a condition to verify if number is less than zero ou the last digit equal zero
```
var isPalindrome = function(x) {
    if(x < 0 || (x !== 0 && x % 10 === 0)){
        return false
    } 
};
```
- create a function to reverse the number, create a variable to receive the number reversed and initialize with value 0
- we used a loop to resolve this, use while and apply the condition parameter of function receive different 0
```
function reverseNumber(num) {
    let reversed = 0;
    while (num !== 0) {
     
    }
}
```
- inside of loop, create a variable to get the last digit, use operation module, then redefine the value of the reversed variable(multiply to 10 because we need to increase one decimal place to eliminate the elements of that number)
```
function reverseNumber(num) {
    let reversed = 0;
    while (num !== 0) {
     const lastDigit = value % 10;

     reversed = reversed * 10 + lastDigit

    }
}
```
- Use the operation trunc to eliminate the last digits of parameter and redefine the result and then return the value
```
function reverseNumber(num) {
    let reversed = 0;
    while (num !== 0) {
     const lastDigit = value % 10;

     reversed = reversed * 10 + lastDigit
     num = Math.trunc(num / 10);
    }

    return reversed
}
```
- now call the function reverseNumber inside isPalindrome and make the comparative
```
function reverseNumber(value) {
    let reversed = 0;
    while (value !== 0) {
        const lastDigit = value % 10;

        reversed = reversed * 10 + lastDigit;
        value = Math.trunc(value / 10);
    }
    return reversed;
}

var isPalindrome = function(x) {
    if(x < 0 || (x !== 0 && x % 10 === 0)){
        return false
    }
    
    return reverseNumber(x) === x
};
```


