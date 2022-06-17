function attachGradientEvents() {
    let box = document.getElementById('gradient');
    box.addEventListener('mousemove', onMouseMove);
    let result = document.getElementById('result');

    function onMouseMove(ev) {
        result.textContent = Math.floor(ev.offsetX / box.clientWidth * 100) + '%';

    }

}