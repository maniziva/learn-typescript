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

test.only("Find max/Min numbers", () => {
  let arr: number[] = [1, 3, 4, 5, 2];
  console.log("Without order: ", arr);

  let max: number = Math.max(...arr);
  console.log("Max number: ", max);

  let min: number = Math.min(...arr);
  console.log("Min number: ", min);
});
