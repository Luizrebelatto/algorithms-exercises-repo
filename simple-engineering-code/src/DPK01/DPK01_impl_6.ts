function reverseString(word) {
  return word
    .split('')              
    .sort((a, b) => 0 - 1)
    .join('');
}

reverseString("Hello");