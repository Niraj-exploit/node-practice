const express = require('express')
const { allUser, registerUser, userLogin } = require('../controller/users.controller')
const router = express.Router()


router.get('/allUser', allUser)

router.post('/register', registerUser)

router.post('/login', userLogin)


module.exports = router