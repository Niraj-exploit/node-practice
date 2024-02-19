const express = require('express')
const router = express.Router()
const { getAllBook, getSingleBook, addBook, updateBook, deleteBook  } = require('../controller/book.controller')
//GET 
router.get('/', getAllBook)

router.get('/:id', getSingleBook )

//POST 
router.post('/', addBook )

router.put("/:id", updateBook)

router.delete('/:id', deleteBook )

module.exports = router



