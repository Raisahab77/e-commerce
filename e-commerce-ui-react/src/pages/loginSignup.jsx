import React from 'react'

const LoginSignup = () => {
  return (
    <div className='bg-[#fce3fe] w-full h-[90vh] flex justify-center py-20'>
      <div className='w-[25%] h-full bg-white p-10 text-left'>
          <h3 className='text-4xl'>Sign Up</h3>
          <input className='w-full py-2 px-3 border mt-10 ' type="text" placeholder='Your Name' />
          <input className='w-full py-2 px-3 border mt-6 ' type="text" placeholder='Email Address' />
          <input className='w-full py-2 px-3 border mt-6 ' type="text" placeholder='Password' />
          <div className='flex gap-2 mt-2'>
            <input className='' type="checkbox" name="" id="" />
            <label className='text-xs'>By continuing, I agree to the term of use & privacy policy.</label>
          </div>
          <button className='w-full py-2 bg-[#ff4141] text-white mt-10'>Continue</button>
          <span className='mt-2'>Already have an account? <span className='text-[#ff4141]'>Login Here</span></span>
      </div>
    </div>
  )
}

export default LoginSignup
