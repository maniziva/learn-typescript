import dayjs from "dayjs";

test("Get Date and Time", () => {
  const currentDate = dayjs().format("YYYYMMDDHHmmss");
  console.log(currentDate); // 2025-04-28

  const currentDateTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
  console.log(currentDateTime); // 2025-04-28 10:26:45
});

test("Find factorial of a number", () => {
  function factorial(num: number) {
    let fact: number = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }

  console.log(factorial(5));
});

test("Find factorial of a number array", () => {
  function factorial(n: number) {
    let fact: number = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }

  const numbers = [3, 4, 5];
  const result = numbers.map(factorial);

  console.log(result);
});

test("without dayjs lib", () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  console.log(`${year}/${month}/${day} ${hour}:${minute}:${second}`);
  console.log(`${year}-${month}-${day} ${hour}:${minute}:${second}`);
  console.log(`${year}${month}${day}${hour}${minute}${second}`);
  console.log(`${year}${month}${day}`);
  console.log(`${year}${month}${day}${hour}${minute}${second}`);

  // Need month or date if single digit it shoutld be 0
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDate = day < 10 ? `0${day}` : day;
  const formattedHour = hour < 10 ? `0${hour}` : hour;
  const formattedMinute = minute < 10 ? `0${minute}` : minute;
  const formattedSecond = second < 10 ? `0${second}` : second;
  console.log(
    `${year}${formattedMonth}${formattedDate}${formattedHour}${formattedMinute}${formattedSecond}`
  );
});

test("Get birth year of given number array", () => {
  function birthYear(n: number) {
    const now = new Date();
    const year = now.getFullYear();

    let age: number = year - n;
    return age;
  }
  const numbers = [1996, 2003, 2004, 2005];

  numbers.forEach((year) => {
    console.log(`Born in ${year} → Age: ${birthYear(year)}`);
  });
});

test("Find the maximum number of consecutive 1s in a binary array", () => {
  const num: number[] = [1, 2, 3, 4, 56, 1, 1, 1, 1, 3, 3];
  console.log(num);

  let count = 0;
  let max = 0;

  for (let item of num) {
    count = item === 1 ? count + 1 : 0;
    max = Math.max(max, count);
  }

  console.log(max);
});
