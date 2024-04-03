import React, { useState} from 'react'
import Banner from '../components/Banner'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom'
import { useBlogsContext } from '../hooks/useBlogsContext';


const Create = () => {
  const {dispatch} = useBlogsContext()
  const navigate = useNavigate()
 
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState('')

  

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true)

   const formData = new FormData()
   formData.append('title', title);
   formData.append('description', description);
   formData.append('content', content);
   formData.append('file', files[0]);
    
  
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: formData,
  });

  const json = await response.json()

  if (response.ok) {
    navigate('/')
    setError(null)
    setLoading(false)
    dispatch({type: 'CREATE_BLOG', payload: json})
  }

  if(!response.ok){
    setError(json.error)
  }   
   
};

  return (
    <div className='font-montserrat'>
      <Banner />
    <div className="w-6/12 mx-auto  shadow-xl py-4 px-3 mt-4 ">
    <h3 className="text-3xl font-poppins text-center font-bold text-red-600">Create a Post</h3>
               <form onSubmit={handleCreate} className="w-6/12 mx-auto flex flex-col gap-4 py-8  ">
                   <input 
                    type='title'
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='border-[2px] border-black py-3 px-2 rounded-lg'
                   />

                    <input 
                    type='text'
                    placeholder='Description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className='border-[2px] border-black py-3 px-2 rounded-lg'
                   />

                     <input 
                    type='file'
                    placeholder='file'
                    onChange={(e) => setFiles(e.target.files)}
                    className='border-[2px] border-black py-3 px-2 rounded-lg'
                   />
                   

                   <ReactQuill theme="snow" value={content} onChange={setContent} />
                   <button disabled={loading} className='bg-red-500 text-white py-4 px-2 rounded-lg'>Create Post</button>
                    {error && <div>{error}</div>}
               </form>
      
    </div>
    </div>
  )
}

export default Create