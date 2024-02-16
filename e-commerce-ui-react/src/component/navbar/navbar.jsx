import logo from '../../Assets/logo.png'
import cart from '../../Assets/cart_icon.png'
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import './navbar.css';

export default function Navbar(){

    window.onscroll = function() {
        changeHeader();
    }

    function changeHeader(){
        
        let navbar = document.getElementById('navbar');
        let scrollValue = window.scrollY;
        if (scrollValue > 0) {
            navbar.classList.add("header","py-4");
        }else{
            navbar.classList.remove("header","py-4");
        }
    }

    

    const [menu,setMenu] = useState("shop");

    return (
        <div className='flex justify-center transition ease-in-out delay-1000 border-b-2 z-20 sticky top-0 bg-white'>
            <div id="navbar" className='w-4/5 flex justify-between items-center p-8'>
                <div className='flex items-center text-3xl'>
                    <img className='mr-2 w-10' src={logo} alt="" />
                    <span>SHOPPERS</span>
                </div>

                <div>
                    <ul className='flex justify-between space-x-10'>
                        <li onClick={()=>{setMenu("shop")}}><NavLink className={({isActive}) => (isActive ? "text-[#FF69B4]" : 'none')} to='/'>Shop</NavLink></li>
                        <li onClick={()=>{setMenu("men")}}><NavLink className={({isActive}) => (isActive ? "text-[#FF69B4]" : 'none')} to='/men'>Men</NavLink></li>
                        <li onClick={()=>{setMenu("women")}}><NavLink className={({isActive}) => (isActive ? "text-[#FF69B4]" : 'none')} to='/women'>Women</NavLink></li>
                        <li onClick={()=>{setMenu("kids")}}><NavLink className={({isActive}) => (isActive ? "text-[#FF69B4]" : 'none')} to='/kids'>Kids</NavLink></li>
                    </ul>
                </div>

                <div className='flex space-x-4 items-center'>
                    <button className='border-2 border-[#7a7a7a] text-[#515151] px-10 py-1.5 rounded-full hover:bg-[#f3f3f3]'><Link to="login"> login</Link></button>
                    <div className='relative'>
                        <img className='w-7' src={cart} alt="" />
                        <span className='w-[15px] h-[15px] text-[10px] bg-red-600 text-white rounded-full absolute -top-1.5 -right-2'>0</span>
                    </div>
                </div>
            </div>
        </div>
    )


}