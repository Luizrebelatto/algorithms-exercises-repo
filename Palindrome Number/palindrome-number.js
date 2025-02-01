// # Solution 1 - Converting to string
var isPalindrome = function(x) {
    const invertedNumber = String(x).split("").reverse().join("");
    return Number(invertedNumber) === x
};

// # Solution 2 - Without Converting to string
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