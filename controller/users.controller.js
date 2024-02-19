const User = require('../models/users.model')
const bcrypt = require('bcryptjs')


exports.allUser = async (req, res) => {
    const allUser = await User.findAll()

    res.json({
        allUser
    })
}


exports.registerUser = async (req, res) => {
     
    const existingUser = await User.findOne({ where: { email: req.body.email  } })

    if(existingUser) {
        return res.json({
            success: false,
            message: "User already exists."
        })
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);  

    await User.create({
        name: req.body.name, 
        email: req.body.email, 
        username: req.body.userName, 
        password: hashPassword 
    })

    res.json( {
        success: true,
        message: "User registered"
    })
}


exports.userLogin = async (req, res) => {
    const existingUser = await User.findOne({ where: { email: req.body.email  } })

    if(!existingUser) {
       return  res.json({
            success: false,
            message: "User not found"
        })
    }

    const matchPassword = await bcrypt.compare(
        req.body.password, 
        existingUser.password 
    )
    
    if(!matchPassword) {
        return res.json({
            success: false,
            message: "Invalid credentials"
        })
    }

    res.json({
        success: true,
        message: "User logged in successful"
    })
}