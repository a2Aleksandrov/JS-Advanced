function encodeAndDecodeMessages() {
    let sendBtn = document.querySelector('#main div button');

    sendBtn.addEventListener('click', encode);

    function encode(ev) {
        let senderScreen = ev.target.parentElement.querySelector('textarea');
        let text = ev.target.parentElement.querySelector('textarea')
            .value
            .split('');

        let encodedText = text
            .map(letter => String.fromCharCode(letter.charCodeAt(0) + 1))
            .join('');
        let receiver = ev.target.parentElement.parentElement.querySelectorAll('textarea')[1];
        receiver.value = encodedText;
        senderScreen.value = '';
    }

    let decodeBtn = document.querySelectorAll('#main div button')[1];

    decodeBtn.addEventListener('click', decodeMsg);

    function decodeMsg(ev) {
        let receiverScreen = ev.target.parentElement.querySelector('textarea');
        let encodedText = ev.target.parentElement.querySelector('textarea')
            .value
            .split('');
        receiverScreen.value = '';
        let decodedText = encodedText
            .map(letter => String.fromCharCode(letter.charCodeAt(0) - 1))
            .join('');

        receiverScreen.value = decodedText;

    }
}