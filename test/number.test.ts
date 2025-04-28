import dayjs from 'dayjs';

test('Get Date and Time', () => {

    const currentDate = dayjs().format('YYYYMMDDHHmmss');
    console.log(currentDate); // 2025-04-28
    
    const currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    console.log(currentDateTime); // 2025-04-28 10:26:45

});