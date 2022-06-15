function LargestNumber(p1, p2, p3) {
    let result = 0;
    if (p1 > p2 && p1 > p3) {
        result = p1;
    } else if (p2 > p1 && p2 > p3) {
        result = p2;
    } else if (p3 > p1 && p3 > p2) {
        result = p3;
    }
    console.log(`The largest number is ${result}.`);
}
LargestNumber(5, -3, 16);
LargestNumber(-3, -5, -22.5);