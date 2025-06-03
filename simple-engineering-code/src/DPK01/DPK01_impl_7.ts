function reverseString(word: string): string {
  let reversedString = "";

  word.split('').forEach((item: string) => {
    reversedString = item + reversedString;
  });

  return reversedString;
}

reverseString("Hello");