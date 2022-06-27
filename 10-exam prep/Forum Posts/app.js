window.addEventListener("load", solve);

function solve() {
  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category');
  let content = document.getElementById('post-content');
  let input = [title, category, content];

  let reviewList = document.getElementById('review-list');
  let publishedList = document.getElementById('published-list');

  let publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', publish);
  function publish(event) {
    event.preventDefault();

    if (title.value == '' || category.value == '' || content.value == '') {
      return;
    }

    //creating review structure
    let li = document.createElement('li');
    li.className = 'rpost';
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    let editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';
    let approveBtn = document.createElement('button');
    approveBtn.className = 'action-btn approve';
    approveBtn.textContent = 'Approve';

    li.appendChild(article);
    li.appendChild(approveBtn);
    li.appendChild(editBtn);

    reviewList.appendChild(li);

    //adding data from input
    h4.textContent = title.value;
    let text1 = category.value;
    p1.textContent = 'Category: ' + text1;
    let text2 = content.value;
    p2.textContent = 'Content: ' + text2;
    //clearing input
    title.value = '';
    category.value = '';
    content.value = '';
    //edit btn functionality
    let edit = li.querySelector('.edit');
    edit.addEventListener('click', onEdit);
    function onEdit() {
      let elements = Array.from(edit.parentElement.children[0].children);
      console.log(text1, text2)
      for (let i = 0; i < input.length; i++) {
        if (i == 1) {
          input[i].value = text1;
        } else if (i == 2) {
          input[i].value = text2;
        } else {
          input[i].value = elements[i].textContent;
        }
      }
      edit.parentElement.remove();
    }
    //approve btn functionality
    let approve = li.querySelector('.approve');
    approve.addEventListener('click', onApprove);
    function onApprove() {
      publishedList.appendChild(approve.parentElement);
      edit.remove();
      approve.remove();
    }

  }
  //clear btn functionality
  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', clear);

  function clear() {
    Array.from(clearBtn.parentElement.children[1].children).forEach(child => child.remove());  
  }
}
