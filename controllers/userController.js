// getting the models folder
const models = require('../models')

// creating an empty object to add functions in the object
const userController = {}


// We're creating functions inside the controller object
// Req are the requests before the api is fetched
// Res is the response we get back after the fetch 


// Function creates a user
userController.createUser = async (req, res) => {
    try {
        const user = await models.user.create({
            // creates where name from user is the same as request body
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.json({ message: 'success', user })
    }
    catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}


// Function logs user in
userController.login = async (req, res) => {
    try{

        // Finds user from email
        const user = await models.user.findOne({where: { email: req.body.email }})

        if ( user && user.password === req.body.password){
            res.json({message: 'success', user: user})
        }
        else{
            res.status(401).json({ message: 'login failed'})
        }

    }
    catch(error){
        console.log(error)
        res.status(400).json(error)
    }
}


// Function verifies user 
userController.verifyUser = async (req, res) => {
    try{
        const user = await models.user.findOne({ where: { id: req.headers.authorization }})
        
        if (user) { res.json({ user: user }) }
        else { res.status(404).json({ message: 'user not found' }) }


    }
    catch(error){
        console.log(error)
        res.status(400).json(error)
    }
}

// exports userController Object so we can import thorough routes
module.exports = userController