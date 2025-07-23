test("To check if an array is palindrome", () => {
    const arr: number[] = [1, 2, 3, 2, 1];
    console.log("Without order: ", arr);
  
    const reversedArray: number[] = arr.reverse();
    console.log("Reversed Array: ", reversedArray);
  
    const isPalindrome: boolean = arr.join("") === reversedArray.join("");
    console.log("Is palindrome: ", isPalindrome);
  });