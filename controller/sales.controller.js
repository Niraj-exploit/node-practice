const Sale = require('../models/sale.model')

exports.allSales = async (req, res)=> {
    const allSales = await Sale.findAll()

    res.json({
        allSales
    })
}

exports.addSales = (req, res)=> {
    Sale.create(req.body)

    res.json({
        message: "Successfully created"
    })
}

exports.updateSales = (req, res)=> {
    const id = req.params.id

    Sale.update(req.body, {
        where: { id: id}
    })

    res.json({
        message: "Successfully updated"
    })
}

exports.deleteSales =  (req, res)=> {
    const id = req.params.id

    Sale.destroy({
        where: { id: id }
    })

    res.json({
        message: "Successfully deleted"
    })
}