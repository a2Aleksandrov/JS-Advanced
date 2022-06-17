function solve() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');
  
  let text = input.value.split('.').filter(x => x.length != 0);
console.log(text);
  while (text.length > 0) {
    
    let currParagraph = text.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = currParagraph;
    output.appendChild(p);
  }
  input.value = ''
}