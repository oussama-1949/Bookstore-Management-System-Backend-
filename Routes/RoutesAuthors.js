const express = require('express')
const router = express.Router()


const {
    getAllAuthors,
    getAuthorById,
    addNewAuthor,
    updateAuthorById, 
    deleteAuthorById
} = require('../Controllers/authors')

router.get('/authors', getAllAuthors);
router.get('/authors/:id',getAuthorById);
router.post('/authors' , addNewAuthor)
router.put('/authors/:id', updateAuthorById)
router.delete('/authors/:id',deleteAuthorById)


module.exports = router