function tickets(description, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;

        }
    }
    let tickets = [];

    for (let line of description) {
        let [destination, price, status] = line.split('|');
        tickets.push(new Ticket(destination, price, status));
    }
    return tickets.sort((a, b) => {
        if (sortCriteria == 'destination') {
            return (a.destination.localeCompare(b.destination));
        } else if (sortCriteria == 'status') {
            return (a.status.localeCompare(b.status));
        } else {
            return a.price - b.price;
        }
    });
}
console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'));