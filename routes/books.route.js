const express = require('express')
const router = express.Router()
const Book = require('../models/books.model')

//GET 
router.get('/', async (req, res)=> {
    // books 
    const book = await Book.findAll()

    res.json({
       book
    })
})


//POST 
router.post('/', (req, res)=> {
    const { name, author, price, category, description } = req.body

    Book.create({
        name: name,
        author: author,
        price: price,
        description: description,
        category: category
    })

    res.json({
        message: "Book stored successfully"
    })
})

module.exports = router