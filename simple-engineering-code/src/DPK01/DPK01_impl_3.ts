function reverseString(word: string): string {
    let reversedString = "";
    let i = word.length - 1;

    while(i >= 0){
        reversedString += word[i];
        i--;
    }
    return reversedString;
}

reverseString("Hello")