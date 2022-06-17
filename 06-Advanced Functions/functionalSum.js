function functionalSum(a) {
        
    const inner = function summing(b) {
            a += b;
        return inner;
    };
    inner.valueOf = function () {
        return a;
    };
    return inner;
}
console.log(Number(functionalSum(1)(6)(-3)));
