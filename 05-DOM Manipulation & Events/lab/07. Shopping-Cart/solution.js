function solve() {
   let buttons = Array.from(document.getElementsByClassName('add-product'));
   buttons.forEach(button => button.addEventListener('click', addProduct));

   let checkOut = document.querySelector('button[class = "checkout"]');
   checkOut.addEventListener('click', totalPrice);

   let cart = document.querySelector('textarea');
   let list = {};
   function addProduct(ev) {
      let product = ev.target.parentElement.parentElement.children[1].children[0].textContent;
      let price = Number(ev.target.parentElement.parentElement.children[3].textContent);
      cart.textContent += (`Added ${product} for ${price.toFixed(2)} to the cart.\n`);

      list[product] ? list[product] += price : list[product] = price;

   }
   function totalPrice(ev) {
      let products = [];
      let total = 0;
      for (let [product, price] of Object.entries(list)) {
         products.push(product)
         total += price;

      }

      cart.textContent += (`You bought ${products.join(', ')} for ${total.toFixed(2)}.`);
      checkOut.removeEventListener('click', totalPrice);
      buttons.forEach(button => button.removeEventListener('click', addProduct));
   }

}