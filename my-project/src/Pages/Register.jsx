import React, { useState } from 'react'
import Banner from '../components/Banner'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/api/user/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, username }),
      });
  
      if (response.ok) {
        navigate('/');
      } 
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  
  return (
    <div className='font-poppins'>
      <Banner />
    <div className="w-6/12 mx-auto  shadow-xl py-4 px-3 mt-4 ">
    <h3 className="text-3xl font-poppins text-center font-bold text-red-600">Register</h3>
               <form onSubmit={handleRegister} className="w-6/12 mx-auto flex flex-col gap-4 py-8  ">
                   <input 
                    type='text'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className='border-[2px] border-black py-4 px-3 rounded-lg'
                   />
                   <input 
                    type='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='border-[2px] border-black py-4 px-3 rounded-lg'
                   />
                   <input 
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className='border-[2px] border-black py-4 px-3 rounded-lg'
                   />
                   <button className='bg-blue-500 text-white py-4 px-2 rounded-lg'>Register</button>
               </form>
      
    </div>
    </div>
  )
}

export default Register