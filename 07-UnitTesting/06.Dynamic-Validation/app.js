function validate() {
    const pattern = /^[a-z0-9_]+@[a-z]+\.[a-z]+$/;
    let inputField = document.getElementById('email');

    inputField.addEventListener('change', validator);

    function validator() {
        if (!inputField.value.match(pattern)) {
            inputField.classList = 'error';
        } else {
            inputField.classList.remove('error');
        }
    }
}