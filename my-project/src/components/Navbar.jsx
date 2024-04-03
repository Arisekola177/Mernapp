
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  
   const [userInfo, setUserInfo] = useState(true)

 


  return (
    <div className='w-full bg-neutral-600 font-montserrat text-white'>
        <div className='w-10/12 mx-auto py-6 flex justify-between items-center'>
             <div>
              <Link to='/'>
                <h1 className="text-2xl font-semibold">Yelp<span className="text-red-500">Travels</span></h1>
                </Link>
             </div>
           {
             userInfo ? (  <div className="flex items-center gap-6">
            <Link className="hover:text-red-500 duration-200" to='/create'>Create a Post</Link>
            <Link className="hover:text-red-500 duration-200" to='/'>Logout</Link>
          </div>) : (  <div className="flex items-center gap-6">
            <Link className="hover:text-red-500 duration-200" to='/register'>Register</Link>
            <Link className="hover:text-red-500 duration-200" to='/login'>Login</Link>
          </div>)
           }
        </div>
    </div>
  )
}

export default Navbar