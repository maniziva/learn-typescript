test("Reverse string", () => {
  let str: string = "Hello World";
  console.log("Without order: ", str);
  let reversedString: string = str.split("").reverse().join("");
  console.log("Reversed String: ", reversedString);
});

test("Find Reverse of a string without using built-in method", () => {
  const str = "Manikandan Adaikalam";
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  console.log(reversedString);
});

test("To check if a string is palindrome", () => {
  const str: string = "madam";
  console.log("Without order: ", str);

  const reversedString: string = str.split("").reverse().join("");
  console.log("Reversed String: ", reversedString);

  const isPalindrome: boolean = str === reversedString;
  console.log("Is palindrome: ", isPalindrome);
});

test("Find vowels in a string", () => {
  const str: string = "Hello World ABC";
  console.log("Without order: ", str);

  const vowels: string[] = str.match(/[aeiou]/gi) || [];
  console.log("Vowels in the string: ", vowels);
});

test("Find number of A from the string", () => {
  const str = "Manikandan Adaikalam";
  const regex = /a/gi;
  const matches = str.match(regex);
  console.log(matches?.length);
});

test("Find a from the string and replace A", () => {
  const str = "Manikandan Adaikalam";
  const matches = str.replace(/a/gi, "A");
  console.log(matches);
});

test("Find longest word in a sentence", () => {
  const str = "The quick brown fox jumps over the lazy dog!";
  const longestWord = str
    .split(" ")
    .reduce((a, b) => (a.length > b.length ? a : b));
  console.log(longestWord);
});

test("Count repeated characters in a string", () => {
  const str = "Manikandan Adaikalam";
  const charCount: { [key: string]: number } = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);
  const repeatedChars = Object.entries(charCount).filter(
    ([char, count]) => count > 1
  );
  console.log(repeatedChars);
});

test("Count repeated numbers in a string - using regex", () => {
  const str = "Manikandan Adaikalam1232";
  const charCount: { [key: string]: number } = {};
  const regex = /[0-9]/g;
  const matches = str.match(regex);
  if (matches) {
    for (const char of matches) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  console.log(charCount);
  const repeatedChars = Object.entries(charCount).filter(
    ([char, count]) => count > 1
  );
  console.log(repeatedChars);
});
