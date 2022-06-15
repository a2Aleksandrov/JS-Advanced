function GreatestCommonDivisor(num1, num2) {

    let smallest = 0;
    if (num1 < num2) {
        smallest = num1;
    } else {
        smallest = num2;
    }
    for (let i = smallest; i > 0; i--) {
        if (num1 % i == 0 && num2 % i == 0) {
            console.log(i);
            break;
        }
    }
}
GreatestCommonDivisor(15, 5);
GreatestCommonDivisor(2154, 458);