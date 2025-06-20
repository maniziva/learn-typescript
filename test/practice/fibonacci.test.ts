test("Generate fibonacci series", () => {
  function generateFibonacci(n: number): number[] {
    const sequence: number[] = [];

    for (let i = 0; i < n; i++) {
      if (i === 0) {
        sequence.push(0);
      } else if (i === 1) {
        sequence.push(1);
      } else {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
    }

    return sequence;
  }

  // Example usage:
  const n = 10; // Generate first 10 Fibonacci numbers
  console.log(`First ${n} Fibonacci numbers:`, generateFibonacci(n));
});
