

function Fibonacci() {
    let a = 0;
    let b = 1;
    let c = 0;
    function sum() {

        c = a + b;
        a = b;
        b = c;
        return a;
    }
    return sum;
}
let fib = Fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
