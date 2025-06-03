function reverseString(word: string): string {
    let reversedString = "";
    
    for(const letter of word){
        reversedString = letter + reversedString
    }
    return reversedString;
}