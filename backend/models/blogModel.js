const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('blog', blogSchema)