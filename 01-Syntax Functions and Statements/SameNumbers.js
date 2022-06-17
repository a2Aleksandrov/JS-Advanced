function SameNumbers(num) {

    let numAsString = num.toString();
    let sum = 0;
    let areSame = true;
    for (let i = 0; i < numAsString.length; i++) {
        let currDigit = Number(numAsString[i]);

        if (numAsString[i] !== numAsString[i + 1] && numAsString[i + 1] !== undefined) {
            areSame = false;
        }
        sum += currDigit;

    }
    console.log(areSame);
    console.log(sum);

}
SameNumbers(2222222);
SameNumbers(1234);