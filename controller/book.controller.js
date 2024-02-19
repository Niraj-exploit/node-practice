const Book = require('../models/books.model')


exports.getAllBook = async (req, res)=> {
    // books 
    const book = await Book.findAll()

    res.json({
       book
    })
}


exports.getSingleBook = async (req, res)=> {
    const id = req.params.id
    const book = await Book.findByPk(id)

    res.json({
        book
    })
}

exports.addBook = async (req, res)=> {
    const { name, author, price, category, description } = req.body

    const ifExist = await Book.findOne({
        where: { name: name }
    })

    if(ifExist) {
        return res.json({
            message: "Book already exist"
        })
    }

    try {
        Book.create({
            name: name,
            author: author,
            price: price,
            description: description,
            category: category
        })
    } catch (error) {
        console.log(error)
    }

    res.json({
        message: "Book stored successfully"
    })
}

exports.updateBook = async (req, res)=> {
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

}

exports.deleteBook = async (req, res)=> {
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
}