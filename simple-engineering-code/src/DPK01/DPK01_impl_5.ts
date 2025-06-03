function reverseString(word: string): string {
    const hashMap = {};
  
    for (let i = word.length - 1; i >=0; i--) {
      hashMap[word.length - 1 - i] = word[i];
    }
  
    let reversedString = '';
  
    for (let i = 0; i < word.length; i++) {
      reversedString += hashMap[i];
    }
  
    return reversedString;
}

reverseString("Hello");