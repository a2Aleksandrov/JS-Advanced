function attachEventsListeners() {

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let buttons = [daysBtn, hoursBtn, minutesBtn, secondsBtn];
    buttons.forEach(button => button.addEventListener('click', onConvert));

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let converter = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }
    function convert(value, unit) {
        let days = value / converter[unit]
        return {
            days: days,
            hours: days * converter.hours,
            minutes: days * converter.minutes,
            seconds: days * converter.seconds
        }
    }
    function onConvert(ev) {

        let input = ev.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}
