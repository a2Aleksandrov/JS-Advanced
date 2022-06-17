function focused() {

    let boxes = Array.from(document.querySelectorAll('input'));
    boxes.forEach(box => {
        box.addEventListener('focus', onFocus);
        box.addEventListener('blur', onBlur);
    });

    function onFocus(ev) {
        ev.target.parentElement.className = 'focused';
    }
    function onBlur(ev) {
        ev.target.parentElement.className = '';
    }
}