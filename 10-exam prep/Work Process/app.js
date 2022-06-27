function solve() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let input = [fname, lname, email, birth, position, salary];


    let addBtn = document.getElementById('add-worker');
    let budget = document.getElementById('sum');
    let sum = 0;
    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        if (fname.value == '' ||
            lname.value == '' ||
            email.value == '' ||
            birth.value == '' ||
            position.value == '' ||
            salary.value == '') {
            return;
        }
        let tableSection = document.querySelector('#tbody');

        let tr = document.createElement('tr');
        for (let i = 0; i < input.length; i++) {
            if (i == input.length - 1) {
                let currentSalary = Number(input[i].value);
                sum += currentSalary;

                budget.textContent = sum.toFixed(2);
            }
            let td = document.createElement('td');
            td.textContent = input[i].value;
            tr.appendChild(td);
        }
        let btns = document.createElement('td');
        let editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.textContent = 'Edit';
        let firedBtn = document.createElement('button');
        firedBtn.className = 'fired';
        firedBtn.textContent = 'Fired';

        btns.appendChild(editBtn);
        btns.appendChild(firedBtn);
        tr.appendChild(btns);
        tableSection.appendChild(tr);

        for (let ele of input) {
            ele.value = '';
        }

        let edit = tr.lastChild.children[0];
        edit.addEventListener('click', onEdit);
        let diff = sum;
        function onEdit() {

            let data = Array.from(edit.parentElement.parentElement.children);

            for (let i = 0; i < input.length; i++) {
                if (i == input.length - 1) {
                    let currentSalary = data[i].textContent;
                    sum -= currentSalary;
                    budget.textContent = sum.toFixed(2);
                }
                input[i].value = data[i].textContent;
            }
            edit.parentElement.parentElement.remove();
        }
        let fired = tr.lastChild.childNodes[1];
        fired.addEventListener('click', onFired);
        function onFired() {

            let data = Array.from(edit.parentElement.parentElement.children);

            for (let i = 0; i < input.length; i++) {
                if (i == input.length - 1) {
                    let currentSalary = data[i].textContent;
                    sum -= currentSalary;
                    budget.textContent = sum.toFixed(2);
                }
            }
            edit.parentElement.parentElement.remove();
        }
    }
}
solve()