function sumTable() {
    let prices = Array.from(document.querySelectorAll('td:nth-child(2n)'));

    prices.pop();

    prices = prices.map(e => Number(e.textContent));
    let sum = 0;

    for (let price of prices) {

        sum += price;
    }
    document.getElementById('sum').textContent = sum;
}