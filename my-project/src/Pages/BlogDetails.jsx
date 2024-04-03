import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlogsContext } from '../hooks/useBlogsContext';

const BlogDetails = () => {
    const { id } = useParams();
    const [bloginfo, setBlogInfo] = useState('')
    const [review, setReview] = useState('')
    const navigate = useNavigate()
    const {dispatch} = useBlogsContext()

    useEffect(() => {
        const fetchSingleBlog = async () => {
            try {
                const response = await fetch(`/api/blogs/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blog');
                }
                const data = await response.json();
                setBlogInfo(data);
                
            } catch (error) {
                console.log(error)
            }
        };

        fetchSingleBlog();
    }, [id]);

    const handleEdit = async () => {
      console.log('Post Edited')
    }

    const handleDelete = async () => {
       const response = await fetch('/api/blogs/' + bloginfo._id, {
        method: 'DELETE'
       })
       const json = await response.json()

       if(response.ok){
        dispatch({type: 'DELETE_BLOG', payload: json})
        navigate('/')
       }
      }
    
  return (
    <div className='w-full font-poppins'> 
         <div className='w-10/12 mx-auto flex justify-center items-center py-10'> 
             {
                bloginfo && <div className='flex justify-between gap-8'>
                     <div>
                     <img className='rounded-lg object-contain w-[400px] h-[400px]' src={'http://localhost:4000/' + bloginfo.cover} alt="" />
                     </div>
                     <div>
                        <h2 className='text-3xl font-semibold py-5 text-red-500'>{bloginfo.title}</h2>
                        <h2 className='text-xl font-semibold py-4'>{bloginfo.description}</h2>
                        <h2 className='text-sm leading-8 w-[600px]'>{bloginfo.content}</h2>
                          <div className='flex gap-4 items-center'>
                            <button onClick={handleEdit} className='bg-green-600 text-white py-2 px-4 rounded-lg'>Edit Post</button>
                            <button onClick={handleDelete} className='bg-red-600 text-white py-2 px-4 rounded-lg'>Delete Post</button>
                         </div>
                        <div className='mt-5'>
                            <h2 className='text-red-500 py-4 text-xl font-semibold'>Reviews</h2>
                           <form>
                          

                          <ReactQuill theme="snow" value={review} onChange={setReview}  />

                            <button className='mt-3 bg-red-500 text-white py-2 px-3 rounded-lg'>Add review</button>
                           </form>
                        </div>
                     </div>
                   
                </div>
}
                       
         </div>  
    </div>
  )
}

export default BlogDetails