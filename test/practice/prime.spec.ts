test("Given input is prime or not", () => {
  const n = 13;
  let isPrime = true;

  if (n < 2) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  console.log(`${n} is ${isPrime ? "a Prime" : "not a Prime"} number`);
});
