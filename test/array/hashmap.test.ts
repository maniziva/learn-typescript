test("Count repeated characters in a string array", () => {
  const str: string[] = ["Manikandan", "Adaikalam"];
  const charCount: { [key: string]: number } = {};
  for (const word of str) {
    for (const char of word) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  console.log(charCount);
  const repeatedChars = Object.entries(charCount).filter(
    ([char, count]) => count > 1
  );
  console.log(repeatedChars);
});
