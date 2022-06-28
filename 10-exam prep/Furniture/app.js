window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');

    let addBtn = document.getElementById('add');

    let tableSection = document.getElementById('furniture-list');
    let totalPrice = document.querySelector('.total-price');

    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        if (model.value == '' || year.value == '' || year.value < 0 || description.value == '' || price.value == '' || price.value < 0) {
            return;
        }

        let trInfo = document.createElement('tr');
        trInfo.className = 'info';
        let furniture = document.createElement('td');
        furniture.textContent = model.value;
        let cost = document.createElement('td');
        cost.textContent = price.value;
        let btns = document.createElement('td');
        let moreInfo = document.createElement('button');
        moreInfo.className = 'moreBtn';
        moreInfo.textContent = 'More Info';
        let buy = document.createElement('button');
        buy.className = 'buyBtn';
        buy.textContent = 'Buy it';

        btns.appendChild(moreInfo);
        btns.appendChild(buy);
        trInfo.appendChild(furniture);
        trInfo.appendChild(cost);
        trInfo.appendChild(btns);

        let trHide = document.createElement('tr');
        trHide.className = 'hide';
        let date = document.createElement('td');
        date.textContent = `Year: ${year.value}`;
        let info = document.createElement('td');
        info.colSpan = '3';
        info.textContent = `Description: ${description.value}`;

        trHide.appendChild(date);
        trHide.appendChild(info);

        tableSection.appendChild(trInfo);
        tableSection.appendChild(trHide);

        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';

        let infoButtons = [];
        let buyButtons = [];
        let tables = Array.from(tableSection.children);
        for (let i = 0; i < tables.length; i += 2) {
            let infoBtn = tables[i].lastChild.children[0];
            infoButtons.push(infoBtn);
            let buyBtn = tables[i].lastChild.children[1];
            buyButtons.push(buyBtn);
        }
        infoButtons.forEach(btn => btn.addEventListener('click', showInfo));
        buyButtons.forEach(btn => btn.addEventListener('click', buyItem));
    }
    function showInfo(event) {

        let hiddenInfo = event.target.parentElement.parentElement.nextSibling;
        if (event.target.textContent == 'More Info') {
            event.target.textContent = 'less Info'
            hiddenInfo.style = 'display: contents';

        } else {
            event.target.textContent = 'More Info';
            hiddenInfo.style = 'display: none';
        }

    }
    let sum = 0;
    function buyItem(event) {

        let mainInfo = event.target.parentElement.parentElement;
        let price = Number(mainInfo.children[1].textContent);

        sum += price;
        totalPrice.textContent = `${sum.toFixed(2)}`;
        let hiddenInfo = event.target.parentElement.parentElement.nextSibling;
        mainInfo.remove();
        hiddenInfo.remove();
    }
}
