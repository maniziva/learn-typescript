test("Reverse string", () => {
    let str: string = "Hello World";
    console.log("Without order: ", str);
    let reversedString: string = str.split("").reverse().join("");
    console.log("Reversed String: ", reversedString);
  });

  test('To check if a string is palindrome', () => {
    const str: string = "madam";
    console.log("Without order: ", str);
  
    const reversedString: string = str.split("").reverse().join("");
    console.log("Reversed String: ", reversedString);
  
    const isPalindrome: boolean = str === reversedString;
    console.log("Is palindrome: ", isPalindrome);
  }
  );