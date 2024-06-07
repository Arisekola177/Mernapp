const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return  jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}



// register
const Register = async(req, res) => {
  const { email, password} = req.body
  try {
    const user = await User.register( email, password)

    // create token
    const token = createToken(user._id)
     res.status(201).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Login
const Login = async(req, res) => {
    const { email, password} = req.body 
    try {
        const user = await User.login( email, password)
    
        // create token
        const token = createToken(user._id)

         res.status(201).json({email, token})
      } catch (error) {
        res.status(400).json({error: error.message})
      }   
}


module.exports = {Register, Login}