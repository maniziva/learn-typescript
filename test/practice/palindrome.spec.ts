test("To check if an array is palindrome", () => {
  const arr: number[] = [1, 2, 3, 2, 1];
  console.log("Without order: ", arr);

  const reversedArray: number[] = arr.reverse();
  console.log("Reversed Array: ", reversedArray);

  const isPalindrome: boolean = arr.join("") === reversedArray.join("");
  console.log("Is palindrome: ", isPalindrome);
});

test("To check if string is palindrome without built-in method", () => {
  const str: string = "APPA";
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if(str === reversed){
    console.log('Its palindrome');
  } else console.log('Its not palindrome');
});
