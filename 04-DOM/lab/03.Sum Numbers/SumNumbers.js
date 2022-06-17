function calc() {
    let field1 = document.getElementById('num1').value;
    let field2 = document.getElementById('num2').value;

    let result = Number(field1) + Number(field2);
    document.getElementById('sum').value = result;


}
