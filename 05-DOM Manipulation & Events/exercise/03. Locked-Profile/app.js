function lockedProfile() {

    let showMoreBtns = Array.from(document.querySelectorAll('button'));
    showMoreBtns.forEach(btn => btn.addEventListener('click', showHidden));

    function showHidden(ev) {
        let unlocked = ev.target.parentElement.querySelector('input[type ="radio"][value="unlock"]');
        if (unlocked.checked == true) {

            let hiddenInfo = ev.target.parentElement.querySelector('div');
            if (ev.target.textContent == 'Show more') {
                hiddenInfo.style.display = 'block';
                ev.target.textContent = 'Hide it'
            } else {
                hiddenInfo.style.display = 'none';
                ev.target.textContent = 'Show more';
            }
        }   
    }
}   