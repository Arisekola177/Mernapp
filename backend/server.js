if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

// init app
const express = require('express')
const mongoose = require('mongoose')
const blogRoute = require('./routes/blogRoute')
const userRoute = require('./routes/userRoute')
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/uploads', express.static(__dirname + '/uploads'))


// routes
app.use('/api/blogs', blogRoute)
app.use('/api/user', userRoute)

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



