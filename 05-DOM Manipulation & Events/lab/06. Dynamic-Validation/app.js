function validate() {

    // <name>@<domain>.<extension>

    let input = document.getElementById('email');
    input.addEventListener('change', onChange);


    function onChange(ev) {

        let pattern = /\b[a-z]+@[a-z]+\.\w{2,3}\b/;
        let match = pattern.exec(ev.target.value);
        if (match == null) {
            ev.target.className = 'error';
        } else {
            ev.target.className = '';
        }

    }
}
