function PreviousDay(year, month, day) {

    let date = new Date(year,month - 1,day);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

}  
PreviousDay(2016, 9, 30);
PreviousDay(2016, 10, 1);


//the months start from 0 to 11
