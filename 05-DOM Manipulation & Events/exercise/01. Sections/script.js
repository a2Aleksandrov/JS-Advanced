function create(words) {
   let content = document.getElementById('content');
   for (let word of words) {
      let div = document.createElement('div');
      div.addEventListener('click', showHidden)
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      content.appendChild(div);
   }
   function showHidden(ev) {
     ev.target.children[0].style.display = 'block';
   }

}