const express = require('express')
const { createBlog, 
    getBlogs, 
    getBlog, 
    deleteBlog, 
    updateBlog } = require('../controller/blogController')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const router = express.Router()

router.get('/', getBlogs)

router.get('/:id', getBlog)

router.post('/', upload.single('file'), createBlog)

router.delete('/:id', deleteBlog)

router.patch('/:id', updateBlog)


module.exports = router