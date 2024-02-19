const express= require('express')
const router = express.Router()
const { allSales, addSales, updateSales, deleteSales } = require('../controller/sales.controller')

//localhost:3000/sales/add-sales 

router.get('/allSales', allSales)

router.post('/add-sales', addSales)

router.put('/update-sales/:id', updateSales )

router.delete('/delete-sales/:id', deleteSales)

module.exports = router

