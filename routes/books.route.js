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

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const book = await Book.findByPk(id)

    res.json({
        book
    })
})


//POST 
router.post('/', async (req, res)=> {
    const { name, author, price, category, description } = req.body

    const ifExist = await Book.findOne({
        where: { name: name }
    })

    if(ifExist) {
        return res.json({
            message: "Book already exist"
        })
    }

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

router.put("/:id", async (req, res)=> {
    const id = req.params.id;
    const  { name, price, author, categroy, description } = req.body

    const ifExist = await Book.findOne({
        where: { name: name }
    })

    if(!ifExist) {
        return res.json({
            message: "book not found"
        })
    }
    Book.update({
        name: name,
        price: price,
        author: author,
        categroy: categroy,
        description: description
    }, {
        where: { id: id }
    })

    res.json({
        message: "Successfully updated"
    })

})

router.delete('/:id', async (req, res)=> {
    const id = req.params.id

    const ifExist = await Book.findOne({
        where: { id: id }
    })

    if(!ifExist) {
        return res.json({
            message: "Book not found"
        })
    }
    await Book.destroy({
        where: {
            id: id
        }
    })
    res.json({
        message: "Successfully deleted"
    })
} )

module.exports = router


// GET POST PUT PATCH DELETE 

//GET response
//ADD POST
//Update PUT 
//Delete DELETE
