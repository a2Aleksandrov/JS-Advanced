function calculator() {
    let selector1 = 0;
    let selector2 = 0;
    let resultSelector = 0;

    function init(s1, s2, sr) {
        selector1 = document.querySelector(s1);
        selector2 = document.querySelector(s2);
        resultSelector = document.querySelector(sr);
    }
    function add() {
        resultSelector.value = Number(selector1.value) + Number(selector2.value);

    }
    function subtract() {
        resultSelector.value = Number(selector1.value) - Number(selector2.value);

    }
    return {
        init,
        add,
        subtract
    }

}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
