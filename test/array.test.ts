
test.only('Array - Sort', () => {

let arr : number[] = [1, 3, 4, 5, 2];
console.log("Without order: ", arr);

arr.sort((a, b) => a - b);
console.log("Ascending Order: ", arr);

arr.sort((a, b) => b - a);
console.log("Descending Order: ", arr);

console.log("First element: ", arr[0]);
console.log("Last element: ", arr[arr.length - 1]);

});