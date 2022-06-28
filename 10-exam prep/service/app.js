window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById('type-product');
    let description = document.getElementById('description');
    let client = document.getElementById('client-name');
    let phone = document.getElementById('client-phone');
    let sendBtn = document.querySelector('button');
    let clearBtn = document.querySelector('.clear-btn');

    sendBtn.addEventListener('click', send);

    let completedSection = document.getElementById('completed-orders');
    function send(event) {
        event.preventDefault();

        if (description.value == '' || client.value == '' || phone.value == '') {
            return;
        }

        let receivedSection = document.getElementById('received-orders');

        let div = document.createElement('div');
        div.className = 'container';
        let h2 = document.createElement('h2');
        let h2text = productType.value;
        h2.textContent = 'Product type for repair: ' + h2text;d
        let h3 = document.createElement('h3');
        let h3text = `${client.value}, ${phone.value}`;
        h3.textContent = 'Client information: ' + h3text;
        let h4 = document.createElement('h4');
        let h4text = description.value;
        h4.textContent = 'Description of the problem: ' + h4text;

        let startRepair = document.createElement('button');
        startRepair.className = 'start-btn';
        startRepair.textContent = 'Start repair';
        let finishRepair = document.createElement('button');
        finishRepair.className = 'finish-btn';
        finishRepair.disabled = true;
        finishRepair.textContent = 'Finish repair';

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startRepair);
        div.appendChild(finishRepair);

        receivedSection.appendChild(div);


        let startBtn = receivedSection.lastChild.children[3];
        startBtn.addEventListener('click', onStart);
        function onStart() {
            startBtn.disabled = true;
            finishBtn.disabled = false;
        }

        let finishBtn = receivedSection.lastChild.lastChild;
        finishBtn.addEventListener('click', onFinish);
        function onFinish() {
            let data = receivedSection.querySelector('.container');
            completedSection.appendChild(data);
            startBtn.remove();
            finishBtn.remove();

        }
    }
    clearBtn.addEventListener('click', clear);

    function clear() {
        let divs = completedSection.querySelectorAll('.container');
        let result = Array.from(divs);
        if (result.length != 0) {
            result.forEach(ele => ele.remove());
        }

    }
}  