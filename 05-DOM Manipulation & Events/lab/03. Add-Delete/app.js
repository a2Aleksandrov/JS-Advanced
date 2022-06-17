function addItem() {
    let input = document.getElementById('newItemText');

    let li = document.createElement('li');

    li.textContent = input.value;
    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onDelete);

    li.appendChild(deleteBtn);

    document.getElementById('items').appendChild(li);

    input.value = '';
}

function onDelete(event) {
    event.target.parentElement.remove();
}