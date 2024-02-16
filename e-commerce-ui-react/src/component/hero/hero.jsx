import React from 'react'
import hand_icon from "../../Assets/hand_icon.png";
import hero_image from "../../Assets/hero_image.png";
import arrow from "../../Assets/arrow.png";
import './hero.css';

const hero = () => {
  return (
    <div className='flex justify-center bg-color'>
        <div className='w-4/5 h-screen flex justify-between items-center'>
            <div className='flex flex-col gap-4 text-left md:w-1/2'>
                <span className='text-xl font-bold'>NEW ARRIVAL ONLY</span>

                <div className='flex gap-4'>
                    <span className='text-6xl font-bold'>new</span>
                    <img className='w-14' src={hand_icon} alt="" />
                </div>

                <span className='text-6xl font-bold'>collections</span>

                <span className='text-6xl font-bold'>for Everyone</span>

                <button className='bg-[#ff4141] text-white w-fit px-6 py-3 rounded-full flex items-center'>Latest collection <img className='pl-2' src={arrow} alt="" /> </button>
            </div>

            <div className='md:w-1/2 flex justify-end'>
                <img className='md:w-3/5 h-auto' src={hero_image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default hero
