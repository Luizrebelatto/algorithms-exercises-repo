function reverseString(word) {
    let reversed = '';
    for (const char of word) {
      reversed = char + reversed;
    }
    return reversed;
  }
  
  console.log(reverseString('hello'));


function reverseString(word: string): string {
    let reversedString = "";
    
    for(const letter of word){
        reversedString = letter + reversedString
    }
    return reversedString;
}