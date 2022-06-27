function solve() {
    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let msg = document.getElementById('message');

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);
    function add(event) {
        event.preventDefault();

        if (recipient.value == '' || title.value == '' || msg.value == '') {
            return;
        }
        let listSection = document.querySelector('.list-mails').querySelector('#list');

        let li = document.createElement('li');
        let titleh4 = document.createElement('h4');
        let recipienth4 = document.createElement('h4');
        let span = document.createElement('span');
        let div = document.createElement('div');
        div.id = 'list-action';
        let sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.textContent = 'Send';
        let deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);

        li.appendChild(titleh4);
        li.appendChild(recipienth4);
        li.appendChild(span);
        li.appendChild(div);

        let text1 = title.value;
        titleh4.textContent = `Title: ${text1}`;
        let text2 = recipient.value;
        recipienth4.textContent = `Recipient Name: ${text2}`;
        span.textContent = msg.value;

        listSection.appendChild(li);

        recipient.value = '';
        title.value = '';
        msg.value = '';


        let send = li.querySelector('#send');
        let del = li.querySelector('#delete');
        send.addEventListener('click', onSend);
        function onSend() {
            let sendSection = document.querySelector('.sent-list');
            let li = fromMailList(text1, text2, del);
            let div = document.createElement('div');
            div.className = 'button';
            del.removeAttribute('id');
            del.className = 'delete';
            div.appendChild(del);
            li.appendChild(div);
            sendSection.appendChild(li);
            
            send.parentElement.parentElement.remove();
            
        }

        del.addEventListener('click', onDelete);
        function onDelete() {

            let deleteSection = document.querySelector('.delete-list');
            del.parentElement.parentElement.remove();
            deleteSection.appendChild(fromMailList(text1, text2, del));

        }
    }
    let resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', reset);
    function reset(event) {
        event.preventDefault();

        recipient.value = '';
        title.value = '';
        msg.value = '';
    }
    function fromMailList(heading2, heading1, button) {
        let li = document.createElement('li');
        let span1 = document.createElement('span');
        span1.textContent = 'To:' + heading1;
        let span2 = document.createElement('span');
        span2.textContent = 'Title:' + heading2;
        li.appendChild(span1);
        li.appendChild(span2);



        return li;
    }
}
solve()


