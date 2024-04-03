
import Post from "./Post"

const BlogList = ({blogs}) => {
  return (
    <div className='grid grid-cols-4 justify-between gap-6'>
       <div className='col-span-3  '>
             <Post blogs={blogs} />
        </div>
        <div className='col-span-1 bg-neutral-600 font-montserrat rounded-lg shadow-xl'>
            <h2 className='text-center font-semibold text-white text-2xl py-2'>World News</h2>
        </div>
    </div>
  )
}

export default BlogList


