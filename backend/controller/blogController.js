const Blog = require('../models/blogModel')
const mongoose = require('mongoose')
const fs = require('fs')


// get all blogs
const getBlogs = async(req, res) => {
    const blogs = await Blog.find({}).sort({createdAt: -1})
    res.status(201).json(blogs)
} 


// get a single blog
const getBlog = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'No such blog'})
    }

    const blog = await Blog.findById(id)
    if(!blog){
        return res.status(404).json({error: 'No such blog'})
    }
    res.status(201).json(blog)
}


// create new blog
const createBlog = async (req, res) => {
    const {originalname,path}= req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1 ]
    const newPath = path+'.'+ext
    fs.renameSync(path, newPath )
    const {title, description, content} = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!description){
        emptyFields.push('description')
    }
    if(!content){
        emptyFields.push('content')
    }

    if(emptyFields.length > 0 ){
        res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }
    try {
     const blog = await Blog.create({
        title,
        description,
        content,
        cover:newPath
     })
     res.status(201).json(blog)
    } catch (error) {
      res.status(400).json({error: error.message}) 
    } 
}


// delete blog
const deleteBlog = async (req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'No such blog'})
    }
    const blog = await Blog.findOneAndDelete({_id: id})
    if(!blog){
        return res.status(404).json({error: 'No such blog'})
    }
    res.status(201).json(blog)
}

// update blog
const updateBlog = async (req, res)=> {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'No such blog'})
    }
    const blog = await Blog.findOneAndUpdate({_id: id}, {
       ...req.body
    })
    if(!blog){
        return res.status(404).json({error: 'No such blog'})
    }
    res.status(201).json(blog)
}

module.exports = {createBlog, getBlogs,getBlog, deleteBlog, updateBlog}