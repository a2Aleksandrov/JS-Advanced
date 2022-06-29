class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }
        let newBook = { bookName, bookAuthor, payed: false };
        this.books.push(newBook);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        let haveBook = false;
        for (let book of this.books) {
            if (book.bookName == bookName) {
                haveBook = true;
                if (book.payed == true) {
                    throw new Error(`${bookName} has already been paid.`);
                } else {
                    book.payed = true;
                }
                return `${bookName} has been successfully paid.`;
            }
        }
        if (haveBook == false) {
            throw new Error(`${bookName} is not in the collection.`);
        }
    }
    removeBook(bookName) {
        let haveBook = false;
        for (let book of this.books) {
            if (book.bookName == bookName) {
                haveBook = true;
                if (book.payed == false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`);
                }
                this.books.splice(this.books.indexOf(book), 1);
                return `${bookName} remove from the collection.`;
            }
        }
        if (haveBook == false) {
            throw new Error('The book, you\'re looking for, is not found.');
        }
    }
    getStatistics(bookAuthor) {
        if (bookAuthor == undefined) {
            let result = [];
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            for (let book of this.books) {

                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed == true ? 'Has Paid' : 'Not Paid'}.`);
            }
            return `The book collection has ${this.capacity - this.books.length} empty spots left.\n${result.join('\n')}`;
        } else {
            let haveAuthor = false;
            for (let book of this.books) {
                let result = [];
                if (book.bookAuthor == bookAuthor) { 
                    haveAuthor = true;
                    let pay = '';
                    book.payed == true ? pay = 'Has Paid' : pay = 'Not Paid';
                    result.push(`${book.bookName} == ${book.bookAuthor} - ${pay}.`);
                    return result.join('\n');
                }
            }
            if (haveAuthor == false) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());