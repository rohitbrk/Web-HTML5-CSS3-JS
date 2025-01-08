// Javascript follows Prototye inheritance
// If you look at the example below, the getSummary method is atatched to the prototype of the Book,
// Hence that method will be available for all instances of the Book

function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year

}

Book.prototype.getSummary = function() {
    `${this.title} was written by ${this.author} in ${this.year}`
}

const book1 = new Book("Book one", "Author one", "1999")
const book2 = new Book("Book two", "Author two", "1992")

console.log(book1, book2)
