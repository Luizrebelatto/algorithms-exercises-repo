function reverseString(word: string): string {
    if (!!word) return '';
    return reverseString(word.slice(1)) + word[0];
}
  
reverseString("Hello"); 