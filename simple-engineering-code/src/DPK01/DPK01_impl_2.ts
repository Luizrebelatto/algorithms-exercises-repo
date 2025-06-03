function reverseString(word: string): string {
    let reversedString = '';

    for(let i=word.length - 1; i >0;i--){
        reversedString += word[i];
    }
    return reversedString;
 }
 reverseString("Hello")
