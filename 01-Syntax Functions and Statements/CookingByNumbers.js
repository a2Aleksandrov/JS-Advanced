function CookingByNumbers(num, ...params) {

    num = Number(num);
    for (let param of params) {
        switch (param) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num++; break;
            case 'bake': num *= 3; break;
            case 'fillet': num -= num * 0.2; break;
        }
        console.log(num);
    }

}
CookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('---');
CookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');