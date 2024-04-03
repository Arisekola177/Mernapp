import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import BlogList from '../components/BlogList'
import { useBlogsContext } from '../hooks/useBlogsContext'

const Home = () => {
  const {blogs, dispatch} = useBlogsContext()


  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs')
      const json = await response.json()
      if(response.ok){
        dispatch({type: 'SET_BLOGS', payload: json})
      }
    }
    fetchBlogs()
  },[dispatch])
  
  

  return (
    <div className='font-montserrat'>
           <Banner />
          <div className='w-10/12 mx-auto py-8'>
              <BlogList blogs={blogs} />
         </div>
    </div>
  )
}

export default Home