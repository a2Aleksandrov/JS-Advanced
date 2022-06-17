function subtract() {

    let firstNum = document.getElementById('firstNumber').value;
    let secNum = document.getElementById('secondNumber').value;

    let result = document.getElementById('result');
    result.textContent = Number(firstNum) - Number(secNum); 
}