function deleteByEmail() {

    let rows = document.querySelectorAll('tbody tr');
    let input = document.querySelector('input[name="email"]');

    let found = false;
    for (let row of rows) {

        if (row.children[1].textContent == input.value) {
            row.remove();
            found = true;
        }

        
    }
    document.getElementById('result').textContent = found ? 'Deleted.' : 'Not found.';
    input.value = '';
}