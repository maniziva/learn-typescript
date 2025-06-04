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

  const [maxChar, maxCount] = Object.entries(charCount).reduce((a, b) =>
    a[1] > b[1] ? a : b
  );
  console.log(`Character :${maxChar} is repeated at :${maxCount} times`);
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

test("Count repeated characters in a each string array", () => {
  const arr = ["adaikalam", "Manikandan", "ManiZiva"];
  arr.forEach((word) => {
    const charCount: { [key: string]: number } = {};

    // Step 1: Count characters
    for (const char of word.toLowerCase()) {
      // Optional: .toLowerCase()
      charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Get repeated characters
    const repeated = Object.entries(charCount).filter(
      ([char, count]) => count > 1
    );

    const repeatmap = Object.fromEntries(repeated);

    console.log(`In "${word}" → Repeated chars:`, repeatmap);
  });
});
