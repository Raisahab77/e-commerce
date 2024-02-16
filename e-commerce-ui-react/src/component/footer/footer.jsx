import React from 'react'
import logo from '../../Assets/logo.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import pintester_icon from '../../Assets/pintester_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div>
        <div className='w-full flex justify-center py-10'>
            <div className='md:w-3/5 flex flex-col justify-between gap-10'>

                <div className='flex justify-center'>
                    <img className='mr-2 w-10' src={logo} alt="" />
                    <span className='text-3xl font-bold'>SHOPPERS</span>
                </div>

                <div >
                    <ul className='flex justify-center gap-10'>
                        <li>Company</li>
                        <li>Products</li>
                        <li>Offices</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='flex justify-center gap-3'>
                    <img src={instagram_icon} alt="" />
                    <img src={pintester_icon} alt="" />
                    <img src={whatsapp_icon} alt="" />
                </div>

            </div>
        </div>
        <hr />
        <span className='p-8'>Copyright @ 2023 - All Right Reserved.</span>
    </div>
  )
}

export default Footer
