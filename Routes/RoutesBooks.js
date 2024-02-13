const express = require ('express')
const router = express.Router();


const {
    getAllBooks ,
    getBookById,
    addBook,
    updateBook,
    deleteBook
} = require('../Controllers/books')

router.get('/books', getAllBooks);
router.get('/books/:id',getBookById);
router.post('/books', addBook)
router.put('/books/:id' , updateBook)
router.delete('/books/:id', deleteBook)



module.exports = router
