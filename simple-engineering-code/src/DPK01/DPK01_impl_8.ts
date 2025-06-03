function reverseString(word: string): string {
  return word
    .split("")
    .reduce((acc, char) => char + acc, "");
}

reverseString("Hello")
