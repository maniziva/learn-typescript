test("Reverse an array", () => {
  let arr: number[] = [1, 3, 4, 5, 2];
  console.log("Without order: ", arr);

  let reversedArray: number[] = arr.reverse();
  console.log("Reversed Array: ", reversedArray);
});

test("Reverse an string using for loop", () => {
  const arr: string = "Manikandan";
  let rev = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    rev = rev + arr[i];
  }
  console.log(rev);
});

test("Reverse an array using for loop", () => {
  const arr: number[] = [1, 3, 4, 5, 2];
  let rev: number[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  console.log(rev);
});

test("Reverse an array of each strings using for loop", () => {
  const str: string[] = ["Manikandan", "adaikalam"];

  let rev: string[] = [];
  let revword = "";

  for (let i = str.length - 1; i >= 0; i--) {
    const word = str[i];
    for (let j = word.length - 1; j >= 0; j--) {
      revword = revword + word[j];
    }
    rev.push(revword);
  }

  console.log(rev);
});

test("To check if an array is palindrome", () => {
  const arr: number[] = [1, 2, 3, 2, 1];
  console.log("Without order: ", arr);

  const reversedArray: number[] = arr.reverse();
  console.log("Reversed Array: ", reversedArray);

  const isPalindrome: boolean = arr.join("") === reversedArray.join("");
  console.log("Is palindrome: ", isPalindrome);
});

test("To reverse a sentence", () => {
  const str: string = "Im Manikandan from Rayavaram";
  const rev = str
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .reverse();
  console.log(rev);
});

test("Reverse a word without using buil-in method", () => {
  const str: string = "the sky is blue";

  let arr = str.split(" ");
  let rev = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    rev = rev + arr[i] + " ";
  }
  console.log(rev.trim());
});
