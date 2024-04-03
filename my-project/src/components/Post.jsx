import { Link } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const Post = ({ blogs }) => {

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      {blogs.map((post) => (
       
        <div  key={post._id} className='flex gap-8 border-b-2 border-red-600 py-4'>
          <Link to={`/blogs/${post._id}`} >
          <div>
            <img className='rounded-lg object-cover w-[300px] h-[200px]' src={'http://localhost:4000/' + post.cover} alt="" />
          </div>
          </Link >
          <div className=''>
            <p className='text-3xl py-4 font-poppins font-semibold text-red-600'>{post.title}.</p>
            <p className='leading-6 text-base font-montserrat'>{post.description}</p>
            <div className='flex items-center gap-6 py-2'>
              <p className='text-base font-montserrat'><span className='font-bold'>Posted: {formatDistanceToNow(new Date(post.createdAt), {addSuffix: true})}</span></p>
              <p className='text-base font-montserrat'><span className='font-bold'>Created: Me</span></p>
            </div>
            <button className='bg-red-600 font-poppins text-white px-3 py-2 rounded-lg mt-4'>Read More</button>
          </div>
         
        </div>
       
      ))}
    </div>
  );
}

export default Post;
