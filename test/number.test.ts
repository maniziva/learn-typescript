import dayjs from 'dayjs';

test('Get Date and Time', () => {

    const currentDate = dayjs().format('YYYYMMDDHHmmss');
    console.log(currentDate); // 2025-04-28
    
    const currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    console.log(currentDateTime); // 2025-04-28 10:26:45

});

test('Find factorial of a number', () => {
    const num: number = 5;
    let factorial: number = 1;
    
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
        }
    
    console.log(`Factorial of ${num} is ${factorial}`);
});