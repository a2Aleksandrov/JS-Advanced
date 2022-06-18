function notify(message) {
  
  let msgField = document.getElementById('notification');
  msgField.textContent = message;
  msgField.style.display = 'block';
  msgField.addEventListener('click', hide);
  function hide(event) {
    
    event.target.style.display = 'none';
  }
}