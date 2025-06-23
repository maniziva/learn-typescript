test("Find factorial of a number", () => {
    function factorial(num: number) {
      if(num<0) throw new Error ("Given input is negative");
      let fact: number = 1;
      for (let i = 1; i <= num; i++) {
        fact *= i;
      }
      return fact;
    }
  
    console.log(factorial(5));
  });