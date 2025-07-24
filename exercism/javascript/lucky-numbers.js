export function twoSum(array1, array2) {
    return Number(array1.join("")) + Number(array2.join(""))
}
  
export function reverseNumber(value) {
    let reversed = 0;
    while (value !== 0) {
      const lastDigit = value % 10;
        reversed = reversed * 10 + lastDigit;
        value = Math.trunc(value / 10);
    }
    return reversed;
}
  
export function luckyNumber(value) {
    if(value < 0 || (value !== 0 && value % 10 === 0)){
        return false
    }  
    return reverseNumber(value) === value
}
  
export function errorMessage(input) {
    if(!input) return 'Required field';
    return Number(input) ? '' : 'Must be a number besides 0'
}
  