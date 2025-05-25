test("Find vowels in an array of strings", () => {
  const str: string[] = ["Hello", "World", "JavaScript"];
  console.log("Without order: ", str);

  const vowels: string[] = str.join("").match(/[aeiou]/gi) || [];
  console.log("Vowels in the array of strings: ", vowels);
  // const vowels: string[] = str.join("").match(/[^aeiou]/gi) || []; - To find Consonants
});

test("Regular expression to find String", () => {
  const str: string = "Manikandan Adaikalam";
  console.log("Without order: ", str);

  const regex: RegExp = /(.*?)Adaikalam/i;
  const matches: string[] = str.match(regex) || [];
  console.log("Matches: ", matches[1]);
});
