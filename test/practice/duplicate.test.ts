test("Find Duplicate elements - using loop", () => {
  const str: string = "Manikandan";
  console.log(`Original String: ${str}`);

  let seen: string[] = [];
  let duplicate: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (seen.includes(str[i])) {
      duplicate.push(str[i]);
    } else seen.push(str[i]);
  }

  console.log(`Duplicated characters: ${duplicate}`);
});

test("Find Duplicate elements - using filter", () => {
  const str: string = "Manikandan";
  console.log(`Original String: ${str}`);
  const duplicate: string[] = [
    ...new Set(
      str.split("").filter((item, index) => str.indexOf(item) !== index)
    ),
  ];
  console.log(`Duplicated characters: `, duplicate);
});

test("Find Duplicate elements - using hashmap", () => {
  const str: string = "Manikandan";
  console.log(`Original String: ${str}`);
  const charCount: { [key: string]: number } = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);

  const duplicate = Object.keys(charCount).filter(
    (char) => charCount[char] > 1
  );
  console.log(duplicate);
});
