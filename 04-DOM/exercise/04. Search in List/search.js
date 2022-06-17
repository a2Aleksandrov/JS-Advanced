function search() {
   let listElements = document.querySelectorAll('ul#towns li');
   let result = document.getElementById('result');
   let searchBoxText = document.getElementById('searchText').value;

   let matches = 0;

   for (let ele of listElements) {
      let text = ele.textContent;
      if (text.match(searchBoxText)) {
         matches++;
         ele.style.textDecoration = 'underline';
         ele.style.fontWeight = 'bold';
      } else {
         ele.style.textDecoration = 'none';
         ele.style.fontWeight = 'normal';
      }
   }
   result.textContent = (`${matches} matches found`);
}
