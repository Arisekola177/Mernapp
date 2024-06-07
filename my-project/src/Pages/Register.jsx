import React, { useState } from 'react'
import Banner from '../components/Banner'
import { useRegister } from '../hooks/useRegister'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


   const {register, error, isLoading} = useRegister()

  const handleRegister = async (e) => {
    e.preventDefault();
     
   await register(email, password)
 
  };
  
  return (
    <div className='font-poppins'>
      <Banner />
    <div className="w-6/12 mx-auto  shadow-xl py-4 px-3 mt-4 ">
    <h3 className="text-3xl font-poppins text-center font-bold text-red-600">Register</h3>
               <form onSubmit={handleRegister} className="w-6/12 mx-auto flex flex-col gap-4 py-8  ">
                   
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
                   <button disabled={isLoading} className='bg-blue-500 text-white py-4 px-2 rounded-lg'>Register</button>
                   {error && <div className='mt-4 border-[1px] border-red-600 bg-red-400 py-4 px-2 text-red-200 animate-bounce'>{error}</div>}
               </form>
      
    </div>
    </div>
  )
}

export default Register