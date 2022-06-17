function deckOfCards(deck) {
    let cards = [];
    for (let cardAsString of deck) {

        let face = cardAsString.slice(0, -1);
        let suit = cardAsString.slice(-1);

        try {
            let card = createCard(face, suit);
            cards.push(card);
        } catch (err) {
            cards = ['Invalid card: ' + cardAsString]
        }
    }
    console.log(cards.join(' '));

    function createCard(face, suit) {

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' };

        if (validFaces.indexOf(face) == -1) {
            throw new Error('Invalid face:' + face);
        }
        if (!validSuits.hasOwnProperty(suit)) {
            throw new Error('invalid suit' + suit);
        }
        const result = {
            face,
            suit: validSuits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
        return result;
    }
}
deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);