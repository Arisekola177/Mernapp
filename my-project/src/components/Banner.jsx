import { banner } from "../Image"

const Banner = () => {
  return (
    <div className='relative'>
      <img
      src={banner}
      alt='banner'
      className='h-[300px] w-[2000px] object-cover'
      />
      <div className='absolute top-[40%] left-[40%] '>
         <h1 className='text-6xl font-semibold font-poppins text-white'>YelpTravels</h1>
         <p className='text-white text-lg font-semibold'>Share your travel experience</p>
      </div>
      </div>
  )
}

export default Banner