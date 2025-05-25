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

test("without sort function", () => {
  const arr = [10, 2, 8, 7, 6, 3, 9, 1, 4, 5];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
});

test("Sort with custom object", () => {
  const arr = [
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Doe", age: 30 },
  ];

  arr.sort((a, b) => a.age - b.age);
  console.log(arr); // Sorted by age in ascending order
});


test('Sort with spread Operator', () => {
  const arr = [10, 2, 8, 7, 6, 3, 9, 1, 4, 5];
  const sortedArr = [...arr].sort((a, b) => a - b);
  console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
});