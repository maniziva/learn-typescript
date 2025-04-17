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

test('Find if the array is sorted or not', () => {
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