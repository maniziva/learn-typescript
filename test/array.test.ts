test("Array - Sort", () => {
  let arr: number[] = [1, 3, 4, 5, 2];
  console.log("Without order: ", arr);

  arr.sort((a, b) => a - b);
  console.log("Ascending Order: ", arr);

  arr.sort((a, b) => b - a);
  console.log("Descending Order: ", arr);
});

test("Find Largest/Smallest - Sort", () => {
  let arr: number[] = [1, 3, 4, 5, 2];
  console.log("Without order: ", arr);

  arr.sort((a, b) => a - b);
  console.log("Smallest Number: ", arr[0]);
  console.log("Largest Number: ", arr[arr.length - 1]);
  console.log("second largest number: ", arr[arr.length - 2]);
});

test("Sum of all elements - Reduce", () => {
  let arr: number[] = [1, 3, 4, 5, 2];
  console.log("Without order: ", arr);

  let sum: number = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log("Sum of all elements: ", sum);
});

test("Find max/Min numbers", () => {
  let arr: number[] = [1, 3, 4, 5, 2];
  console.log("Without order: ", arr);

  let max: number = Math.max(...arr);
  console.log("Max number: ", max);

  let min: number = Math.min(...arr);
  console.log("Min number: ", min);
});

test("Find if the array is sorted or not", () => {
  let arr: number[] = [1, 3, 4, 5, 1];
  const isSorted = (arr: number[]) => {
    let ascendingOrder: boolean = true;
    let descendingOrder: boolean = true;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        ascendingOrder = false;
      } else if (arr[i] > arr[i - 1]) {
        descendingOrder = false;
      }
    }

    if (ascendingOrder) {
      return "Array is sorted in ascending order";
    } else if (descendingOrder) {
      return "Array is sorted in descending order";
    } else {
      return "Array is not sorted";
    }
  };
  console.log(isSorted(arr)); // Output depends on the input array
});

test("Remove duplicates from an array", () => {
  let arr: number[] = [1, 3, 4, 5, 1];
  const removeDuplicates = [...new Set(arr)];
  console.log("Remove duplicate from an number array: ", removeDuplicates); // Output: [1, 3, 4, 5]

  let arr2: string[] = ["apple", "banana", "apple", "orange"];
  const removeDuplicates2 = [...new Set(arr2)];
  console.log("Remove duplicate from an string array: ", removeDuplicates2); // Output: ["apple", "banana", "orange"]
});

test("find duplicates in an array", () => {
  const nums: number[] = [1, 2, 3, 2, 4, 5, 1, 6, 4];
  const duplicates = nums.filter((item, index) => nums.indexOf(item) !== index);

  const uniqueDuplicates = [...new Set(duplicates)];
  console.log("Duplicate elements:", uniqueDuplicates);
});

test("find duplicates in an string array", () => {
  const str: string[] = ["apple", "banana", "orange", "banana", "apple"];
  const duplicates = str.filter((item, index) => str.indexOf(item) !== index);

  const uniqueDuplicates = [...new Set(duplicates)];
  console.log("Duplicate elements:", uniqueDuplicates);
});

test("Merge two arrays", () => {
  const arr1: number[] = [1, 2, 3];
  const arr2: number[] = [4, 5, 6, 1];

  const mergedArray: number[] = [...arr1, ...arr2];
  const uniqueMergedArray: number[] = [...new Set(mergedArray)];
  console.log("Merged array:", uniqueMergedArray); // Output: [1, 2, 3, 4, 5, 6]
});

test("Find Odd/Even an array", () => {
  let arr: number[] = [1, 3, 4, 5, 2];
  console.log("Without order: ", arr);

  let evenNumbers: number[] = arr.filter((num) => num % 2 === 0);
  console.log("Even Numbers: ", evenNumbers);

  let oddNumbers: number[] = arr.filter((num) => num % 2 !== 0);
  console.log("Odd Numbers: ", oddNumbers);
});

test("Reverse an array", () => {
  let arr: number[] = [1, 3, 4, 5, 2];
  console.log("Without order: ", arr);

  let reversedArray: number[] = arr.reverse();
  console.log("Reversed Array: ", reversedArray);
});

test('Reverse each word in a string arrays', () => {
  const str: string[] = ["Hello", "World", "JavaScript"];
  console.log("Without order: ", str);

  const reversedWords: string[] = str.map((word) => word.split("").reverse().join(""));
  console.log("Reversed words: ", reversedWords);
});

test('To check if an array is palindrome', () => {
  const arr: number[] = [1, 2, 3, 2, 1];
  console.log("Without order: ", arr);

  const reversedArray: number[] = arr.reverse();
  console.log("Reversed Array: ", reversedArray);

  const isPalindrome: boolean = arr.join("") === reversedArray.join("");
  console.log("Is palindrome: ", isPalindrome);}
);