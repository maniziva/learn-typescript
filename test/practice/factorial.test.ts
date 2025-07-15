test("Find factorial of a number", () => {
  function factorial(num: number): number {
    if (num < 0) throw new Error("Given input is negative");
    return num === 0 ? 1 : num * factorial(num - 1);
  }

  console.log(factorial(5));
});
