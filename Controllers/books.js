const books = require('../Modals/data');



exports.getAllBooks = (req, res) => {
    res.json(books);
}
exports.getBookById = (req, res) => {
    const BookId = parseInt(req.params.id);
    const book = books.filter(book => BookId === book.id)
    if (book.length === 0) {
        return ("no book found")
    }
    res.json(book[0])
}

exports.addBook = (req, res) => {
    const newBook = req.body
    books.push(newBook)
    res.json(books)
}

exports.updateBook = (req, res) => {
    // const bookId = parseInt(req.params.id)
    // const index = books.findIndex(book => book.id === bookId);
    // if (index === -1) {
    //     return res.status(404).json({ error: 'Book not found' });
    // }
    // const updatedBook = {
    //     id: bookId,
    //     ...req.body
    // };

    // // Replace the old book with the updated one
    // books[index] = updatedBook;

    // // Return the updated book
    // res.json(books);

    const { id } = req.params
    // console.log( Object.entries(req.body),'---',req.body)
    books.forEach(book => {
        if (book.id == id) {
            for (let [key, value] of Object.entries(req.body)) {
                book[key] = value
            }
        }

    })
    res.json(books);
}

exports.deleteBook = (req, res) => {

    const data = [...books]
    const { id } = req.params;
    const index = data.findIndex(book => book.id == id)
    data.splice(index, 2)
    console.log("delete book by id!!")
    res.json(data)
}