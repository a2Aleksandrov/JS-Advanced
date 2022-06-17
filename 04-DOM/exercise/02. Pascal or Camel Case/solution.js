function solve() {
    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;

    let result = '';

    let words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        if (convention == 'Camel Case') {
            if (i != 0) {
                words[i] = words[i][0].toUpperCase() + words[i].substring(1);
            }
        } else if (convention == 'Pascal Case') {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        } else {
            return document.getElementById('result').textContent = 'Error!';
        }
    }
    result = words.join('');
    document.getElementById('result').textContent = result;

}   