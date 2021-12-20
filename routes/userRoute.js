// this variable extends from server.js
const userRoutes = require('express').Router()

// imports userController file we created
const userController = require('../controllers/userController')

userRoutes.post('/login', userController.login)
userRoutes.post('/', userController.createUser)
userRoutes.get('/verify', userController.verifyUser)


module.exports = userRoutes