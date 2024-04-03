import React, { useState } from 'react'
import Banner from '../components/Banner'
import {useNavigate} from 'react-router-dom'
const Login = () => {
   
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:4000/api/blogs/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            credentials: 'include'
        });
        if (response.ok) {
            navigate('/');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        
    }
};


  return (
    <div className='font-poppins'>
      <Banner />
    <div className="w-6/12 mx-auto  shadow-xl py-4 px-3 mt-4 ">
    <h3 className="text-3xl font-poppins text-center font-bold text-red-600">Login</h3>
               <form onClick={handleLogin} className="w-6/12 mx-auto flex flex-col gap-4 py-8  ">
                   <input 
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="border-black border-[2px] py-3 px-4 rounded-lg"
                   />
                    <input 
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="border-black border-[2px] py-3 px-4 rounded-lg"
                   />
                   <button className='bg-blue-500 text-white py-4 px-2 rounded-lg'>Login</button>
               </form>
      
    </div>
    </div>
  )
}

export default Login