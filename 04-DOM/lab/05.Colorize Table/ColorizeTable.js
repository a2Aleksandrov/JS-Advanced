function colorize() {
    let lines = Array.from(document.getElementsByTagName('tr'));

    lines.shift();

    for (let i = 0; i < lines.length; i += 2) {
        if (i % 2 == 0) {
            lines[i].style.background = 'Teal';
        }
    }

}