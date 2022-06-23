window.addEventListener("load", solve);

function solve() {
  let titleField = document.getElementById('post-title');
  let categoryField = document.getElementById('post-category');
  let textField = document.getElementById('post-content');
  let publishBtn = document.getElementById('publish-btn');

  let reviewField = document.getElementById('review-list');

  publishBtn.addEventListener('click', publish);


  function publish() {
    if (titleField.value != '' && categoryField.value != '' && textField.value != '') {
      let li = document.createElement('li');
      li.className = 'rpost';
      let article = document.createElement('article');
      let h4 = document.createElement('h4');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');

      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);

      li.appendChild(article);

      let editBtn = document.createElement('button');
      editBtn.textContent = 'Edit'
      editBtn.className = 'action-btn edit';

      let approveBtn = document.createElement('button');
      approveBtn.textContent = 'Approve';
      approveBtn.className = 'action-btn approve';

      li.appendChild(approveBtn);
      li.appendChild(editBtn);

      reviewField.appendChild(li);

      h4.textContent = titleField.value;
      let pp1 = categoryField.value;
      p1.textContent = 'Category: ' + pp1;
      let pp2 = textField.value;
      p2.textContent = 'Content: ' + pp2;

      titleField.value = '';
      categoryField.value = '';
      textField.value = '';

      let edit = document.getElementsByClassName('action-btn edit')[0];
      edit.addEventListener('click', editing);

      function editing() {

        titleField.value = document.querySelector('h4').textContent;
        categoryField.value = pp1;
        textField.value = pp2;


        document.querySelector('.rpost').remove();

      }

      let approve = document.getElementsByClassName('action-btn approve')[0];
      approve.addEventListener('click', onApprove);

      function onApprove() {
        let li = document.querySelector('.rpost');
        let approveField = document.getElementById('published-list');
        approveField.appendChild(li);
        editBtn.remove();
        approveBtn.remove();
      }
    }
  }
  let clearBtn = document.getElementById('clear-btn');

  clearBtn.addEventListener('click', clear);

  function clear() {
    document.querySelector('.rpost').remove();
  }
}
