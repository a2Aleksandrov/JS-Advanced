function solve() {

  let generateBtn = document.querySelector('#exercise button');
  generateBtn.addEventListener('click', generate);


  function generate(ev) {
    let input = JSON.parse(ev.target.parentElement.querySelector('textarea[rows="5"][cols="50"]').value);

    let furnituresScreen = ev.target.parentElement.querySelector('.table tbody');
    for (let obj of input) {
      let tr = document.createElement('tr');
      for (let keys in obj) {
        let td = document.createElement('td');
        if (keys == 'img') {
          let img = document.createElement('img');
          img.src = obj[keys];
          td.appendChild(img);
        } else {

          td.textContent = obj[keys];
        }

        tr.appendChild(td);
      }
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      tr.appendChild(checkbox);
      furnituresScreen.appendChild(tr);

    }

  }
  let buyBtn = document.querySelectorAll('#exercise , button')[2];

  buyBtn.addEventListener('click', buy);

  function buy(ev) {

    let resultField = ev.target.parentElement.querySelector('textarea[rows="4"][cols="50"]');
    let checkbox = ev.target.parentElement.querySelectorAll('input[type="checkbox"]');

    let furnitures = [];
    let totalPrice = 0;
    let sumFactor = 0;
    let counter = 0;
    checkbox.forEach(box => {
      if (box.checked == true) {
        let name = box.parentElement.children[1].textContent;
        let price = Number(box.parentElement.children[2].textContent);
        let decFactor = Number(box.parentElement.children[3].textContent);
        counter++;

        furnitures.push(name);
        totalPrice += price;
        sumFactor += decFactor;
      }
    });
    let avFactor = sumFactor / counter;
    resultField.value = (`Bought furniture: ${furnitures.join(', ')}\r\n
    Total price:${totalPrice.toFixed(2)}\r\n
    Average decoration factor: ${avFactor}`);

  }

}