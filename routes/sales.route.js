const express= require('express')
const router = express.Router()
const Sale = require('../models/sale.model')

router.get('/allSales', async (req, res)=> {
    const allSales = await Sale.findAll()

    res.json({
        allSales
    })
})

router.post('/add-sales', (req, res)=> {
    Sale.create(req.body)

    res.json({
        message: "Successfully created"
    })
})

router.put('/update-sales/:id', (req, res)=> {
    const id = req.params.id

    Sale.update(req.body, {
        where: { id: id}
    })

    res.json({
        message: "Successfully updated"
    })
})


router.delete('/delete-sales/:id', (req, res)=> {
    const id = req.params.id

    Sale.destroy({
        where: { id: id }
    })

    res.json({
        message: "Successfully deleted"
    })
})

module.exports = router