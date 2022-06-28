window.addEventListener("load", solve);

function solve() {

  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let price = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');

  let input = [make, model, year, fuel, price, sellingPrice];

  let publish = document.getElementById('publish');

  let tableSection = document.querySelector('#table-body');
  let soldSection = document.querySelector('#cars-list');

  let profit = document.querySelector('#profit');
  let sum = 0;

  publish.addEventListener('click', onPublish);

  function onPublish(event) {
    event.preventDefault();

    if (make.value == '' || model.value == '' || year.value == '' || fuel.value == '' || price.value == '' || sellingPrice.value == '' ||
      price.value > sellingPrice.value) {
      return;
    }
    let tr = document.createElement('tr');
    tr.className = 'row';
    for (let i = 0; i < input.length; i++) {
      let td = document.createElement('td');
      td.textContent = input[i].value;
      tr.appendChild(td);
    }
    let buttons = document.createElement('td');
    let edit = document.createElement('button');
    edit.className = 'action-btn edit';
    edit.textContent = 'Edit';
    let sell = document.createElement('button');
    sell.className = 'action-btn sell';
    sell.textContent = 'Sell';

    buttons.appendChild(edit);
    buttons.appendChild(sell);
    tr.appendChild(buttons);

    tableSection.appendChild(tr);

    input.forEach(el => el.value = '');

    let editButtons = [];
    let sellButtons = [];
    let cars = Array.from(document.querySelectorAll('.row'));
    for (let car of cars) {
      editButtons.push(car.lastChild.children[0]);
      sellButtons.push(car.lastChild.children[1]);
    }
    editButtons.forEach(btn => btn.addEventListener('click', onEdit));
    sellButtons.forEach(btn => btn.addEventListener('click', onSell));
  }

  function onEdit(event) {
    let data = Array.from(event.target.parentElement.parentElement.children);
    for (let i = 0; i < input.length; i++) {
      input[i].value = data[i].textContent;
    }
    event.target.parentElement.parentElement.remove();
  }
  function onSell(event) {
    let carMake = event.target.parentElement.parentElement.children[0];

    let carModel = event.target.parentElement.parentElement.children[1];
    console.log(carMake, carModel);
    let carYear = event.target.parentElement.parentElement.children[2];
    let carSellingPrice = event.target.parentElement.parentElement.children[4];
    let carPrice = event.target.parentElement.parentElement.children[5];
    let  currCar = createSold(carMake,carModel,carYear,carSellingPrice,carPrice);
    soldSection.appendChild(currCar);

    let diff = Number(carPrice.textContent) - Number(carSellingPrice.textContent);
    sum += diff;
    profit.textContent = `${sum.toFixed(2)}`;
    event.target.parentElement.parentElement.remove();
    
  }
  function createSold(make, model, year, sellingPrice, price) {
    let li = document.createElement('li');
    li.className = 'each-list';
    let span1 = document.createElement('span');
    span1.textContent = `${make.textContent} ${model.textContent}`;
    let span2 = document.createElement('span');
    span2.textContent = year.textContent;
    let span3 = document.createElement('span');
    span3.textContent = `${Number(price.textContent) - Number(sellingPrice.textContent)}`;
    
    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);
    return li;
  }

}
