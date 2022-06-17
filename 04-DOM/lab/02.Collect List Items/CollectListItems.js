function extractText() {
    let elements = document.getElementById('items').textContent;
    let field = document.getElementById('result');
    field.value = elements;
    
}
