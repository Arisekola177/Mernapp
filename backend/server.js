require('dotenv').config()

// init app
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// blog routes
const blogRoutes = require('./routes/blogRoutes')

// middleware
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/blogs', blogRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
 .then(() =>{
    app.listen(process.env.PORT,(
        console.log('Connected to db & listening on port', process.env.PORT)
    ))
 })
 .catch((error)=>{
    console.log(error)
 } )
