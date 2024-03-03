const express = require('express')

const Blog = require('../models/blogModel')

const router = express.Router()

// Get all blogs
router.get('/', (req, res) => {
  res.json({messg: 'GET ALL BLOGS'})
})


// Get a single blog
router.get('/:id', (req, res) => {
    res.json({messg: 'GET A SINGLE BLOG'})
  })

// POST A BLOG

router.post('/', async (req, res) => {
  const {title,image, description} = req.body

  try {
     const blog = await Blog.create({title,image, description})
     res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
 
  })

//   UPDATE A BLOG
router.patch('/:id', (req, res) => {
    res.json({messg: 'UPDATE A BLOG'})
  })


//   DELETE A BLOG
router.delete('/:id', (req, res) => {
    res.json({messg: 'DELETE A BLOG'})
  })
module.exports = router