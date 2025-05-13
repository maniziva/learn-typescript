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

  // Using reduce
  let maxi: number = arr.reduce((a, b) => (a > b ? a : b));
  console.log(maxi);

  let mini: number = arr.reduce((a, b) => (a < b ? a : b));
  console.log(mini);
});

test("Find if the array is sorted or not", () => {
  const arr: number[] = [1, 3, 4, 5, 1];
  const isSorted = (arr: number[]) => {
    let isAsc: boolean = true;
    let isDesc: boolean = true;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) isDesc = false;
      if (arr[i] < arr[i - 1]) isAsc = false;
    }

    if (isAsc) return "Array is sorted in ascending order";
    if (isDesc) return "Array is sorted in descending order";
    return "Array is not sorted";
  };

  console.log(isSorted(arr)); // Output: Array is not sorted
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
  const arr: number[] = [1, 2, 3, 2, 4, 5, 1, 6, 4, 2, 2, 2, 2];

  const seen: number[] = [];
  const duplicates: number[] = [];

  arr.forEach((num: number) => {
    if (seen.includes(num)) {
      duplicates.push(num);
    } else {
      seen.push(num);
    }
  });

  console.log([...new Set(duplicates)]); // Output: [2, 1, 4]
});

test("find duplicates in an string array", () => {
  const str: string[] = ["apple", "banana", "orange", "banana", "apple", "apple"];

  const seen: string[] = [];
  const duplicate: string[] = [];

  str.forEach((item) => {
    if (seen.includes(item)) {
      duplicate.push(item);
    } else {
      seen.push(item);
    }
  });
  console.log([...new Set(duplicate)]);
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

test("Reverse each word in a string arrays", () => {
  const str: string[] = ["Hello", "World", "JavaScript"];
  console.log("Without order: ", str);

  const reversedWords: string[] = str.map((word) =>
    word.split("").reverse().join("")
  );
  console.log("Reversed words: ", reversedWords);
});

test("To check if an array is palindrome", () => {
  const arr: number[] = [1, 2, 3, 2, 1];
  console.log("Without order: ", arr);

  const reversedArray: number[] = arr.reverse();
  console.log("Reversed Array: ", reversedArray);

  const isPalindrome: boolean = arr.join("") === reversedArray.join("");
  console.log("Is palindrome: ", isPalindrome);
});

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

test("Find the longest word in an array of strings", () => {
  const str: string[] = ["Hello", "World", "JavaScript"];
  console.log("Without order: ", str);

  const longestWord: string = str.reduce((a, b) =>
    a.length > b.length ? a : b
  );
  console.log("Longest word: ", longestWord);
});

test("Find the shortest word in an array of strings", () => {
  const str: string[] = ["Hello", "World", "JavaScript"];
  console.log("Without order: ", str);

  const shortestWord: string = str.reduce((a, b) =>
    a.length < b.length ? a : b
  );
  console.log("Shortest word: ", shortestWord);
});

test("Find the longest word in an array of strings - using for loop", () => {
  const str: string[] = ["Hello", "World", "JavaScript"];
  console.log("Without order: ", str);

  let longestWord: string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestWord.length) {
      longestWord = str[i];
    }
  }
  console.log("Longest word: ", longestWord);
});

test("For In - Loop through an array", () => {
  const arr: number[] = [1, 2, 3, 4, 5];
  console.log("Without order: ", arr);

  for (let index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
  }
});

test("For Of - Loop through an array", () => {
  const arr: number[] = [1, 2, 3, 4, 5];
  console.log("Without order: ", arr);

  for (let value of arr) {
    console.log(`Value: ${value}`);

	for(let value of arr){
			if(value%2===0) console.log(`${value} is Even numver`)
			else console.log(`${value} is Odd numver`)
		}
  }
});

test("For Each - Loop through an array", () => {
  const arr: number[] = [1, 2, 3, 4, 5];
  console.log("Without order: ", arr);

  arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
  });
});

test("Map - Loop through an array", () => {
  const arr: number[] = [1, 2, 3, 4, 5];
  console.log("Without order: ", arr);

  const mappedArray: number[] = arr.map((value) => value * 2);
  console.log("Mapped Array: ", mappedArray);
});

test("Filter - Loop through an array", () => {
  const arr: number[] = [1, 2, 3, 4, 5];
  console.log("Without order: ", arr);

  const filteredArray: number[] = arr.filter((value) => value > 2);
  console.log("Filtered Array: ", filteredArray);
});

test("Map - Odd Even for all elemets", () => {
  const arr = [1,4,3,5,6,7,199901,1];
  const small = arr.map((a) => {
  if (a%2===0) return `${a} - is even number`;
  else return `${a} - is odd number`;
  });
console.log(small);
});

test("Count number of duplicates in an array", () => {
  const arr: number[] = [1, 2, 3, 2, 4, 5, 1, 6, 4, 2, 2, 2, 2];

  const seen: number[] = [];
  const duplicates: number[] = [];

  arr.forEach((num: number) => {
    if (seen.includes(num)) {
      duplicates.push(num);
    } else {
      seen.push(num);
    }
  });
  const Count = [...new Set(duplicates)];
  console.log(Count); // Output: [2, 1, 4]
  console.log(Count.length); // Output: [2, 1, 4]
});

test('Find index of an element in an array', () => {
  const arr: string[] = ["1", "2", "3", "4", "5", "8"];

  function findIndex(arr: string[], element: string): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return -1; // Element not found
  } 
  const index: number = findIndex(arr, "3");
  console.log("Index of element: ", index); // Output: 2

});


test('Find second largest number in an array', () => {
  const arr: number[] = [1, 2, 3, 4, 5, 8];
  console.log("Without order: ", arr);

const largest = Math.max(...arr);
const secondLargest = Math.max(...arr.filter(num => num !== largest));
console.log("Second largest number: ", secondLargest); // Output: 5
}
);