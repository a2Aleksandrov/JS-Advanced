function TimeToWalk(steps, footLength, speedKmH) {

    let distance = steps * footLength;
    let rest = Math.floor(distance / 500) * 60;
    let speed = speedKmH * 1000 / 3600;
    let time = distance / speed;
    let totalTime = time + rest;
    let hours = Math.floor(totalTime / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(totalTime / 60).toFixed(0).padStart(2, '0');
    let seconds = (totalTime % 60).toFixed(0).padStart(2, '0');


    console.log(`${hours}:${minutes}:${seconds}`);
}
TimeToWalk(4000, 0.60, 5);
TimeToWalk(2564, 0.70, 5.5);