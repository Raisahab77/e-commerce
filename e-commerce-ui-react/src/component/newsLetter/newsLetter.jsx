import React from 'react';
import './newsLetter.css';
const NewsLetter = () => {
  return (
    <div className='md:flex justify-center items-center'>

    <div className='w-4/5 md:flex items-center newsletter-bg-color'>
        <div className='w-full flex justify-center p-20'>
            <div className=''>
                <div>
                    <h4 className='text-5xl font-semibold'>Get Exclusive Offers On Email </h4>
                    <p className='mt-5'>Subscribe our newsletter and stay updated</p>
                </div>
                
                <div className='w-full mt-8 relative'>
                    <input className='w-[75%] outline-none border-2 px-5 py-2.5 rounded-full' type="text" placeholder="Your Email ID" />
                    <button className='w-[25%] text-white bg-black text-center py-[12px] rounded-full absolute right-0'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NewsLetter;
