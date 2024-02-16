import React from 'react'
import './offers.css'
import exclusive_image from '../../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='md:flex justify-center items-center'>

        <div className='w-4/5 md:flex items-center bg-color'>
            <div className='md:w-1/2 flex justify-center'>
                <div className='w-fit text-left'>
                    <div>
                        <h4 className='text-5xl font-semibold leading-loose'>Exclusive </h4>
                        <h4 className='text-5xl font-semibold'>Offers for You</h4>
                        <p className='font-semibold leading-10'>ONLY ON BEST SELLER PRODUCTS</p>
                    </div>
                    <button className='bg-[#ff4141] text-white w-fit px-10 py-2.5 rounded-full flex items-center mt-8'>Check Now</button>
                </div>
            </div>

            <div className='md:w-1/2 h-96 md:flex justify-center items-center'>
                <img className='h-full' src={exclusive_image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Offers;
