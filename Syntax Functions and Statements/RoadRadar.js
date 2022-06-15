function RoadRadar(speed, area) {

    let allowedSpeed = 0;
    switch (area) {
        case 'city': allowedSpeed = 50; break;
        case 'residential': allowedSpeed = 20; break;
        case 'interstate': allowedSpeed = 90; break;
        case 'motorway': allowedSpeed = 130; break;
    }
    if (speed > allowedSpeed) {
        let difference = speed - allowedSpeed;
        let status = '';
        if (difference <= 20) {
            status = 'speeding'
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
    } else {

        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
    }
}
RoadRadar(40, 'city');
RoadRadar(21, 'residential');
RoadRadar(120, 'interstate');
RoadRadar(200, 'motorway');