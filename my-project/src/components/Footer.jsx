import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-neutral-600 font-montserrat text-white'>
    <div className='w-10/12 mx-auto py-6 flex justify-between items-center'>
         <div>
            <h1 className="text-2xl font-semibold">Yelp<span className="text-red-500">Travels</span></h1>
         </div>
         <div className="flex flex-col items-center gap-6">
          <a className="hover:text-red-500 duration-200" href='/register'>Register</a>
          <a className="hover:text-red-500 duration-200" href='/login'>Login</a>
        </div>
        <div className="flex flex-col items-center gap-6">
          <a className="hover:text-red-500 duration-200" href='/register'>FAQ</a>
          <a className="hover:text-red-500 duration-200" href='/login'>Newsletter</a>
        </div>
    </div>
</div>
  )
}

export default Footer