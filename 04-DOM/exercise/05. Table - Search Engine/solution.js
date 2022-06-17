function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let input = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {

      for (let row of rows) {

         if (input.value != '' && row.textContent.match(input.value)) {
            row.className = 'select';
         } else {
            row.classList.remove('select');
         }

      }
      input.value = '';
   }
}