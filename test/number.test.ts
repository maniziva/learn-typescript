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

test('without dayjs lib', ()=>{
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
    console.log(`${year}${formattedMonth}${formattedDate}${formattedHour}${formattedMinute}${formattedSecond}`);
});