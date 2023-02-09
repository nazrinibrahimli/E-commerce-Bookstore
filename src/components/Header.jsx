import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Item from '../pages/Item';
import cart from '../assets/images/cart.png'

const Header = () => {

const {openCart, cartQuantity} = CartContext()

  return (
    <div className='py-auto'>
   
      <nav className='flex font-serif   sm:px-[3rem] py-[15px] h-[95px] bg-white '>
        <ul className='flex flex-1 items-center text-[#251749] justify-start  '>
        <Link to="/"><img className='pr-[15px]' src="https://img.icons8.com/external-outline-lafs/64/null/external-home-stop-virus-outline-iconset-2-outline-lafs-2.png"/></Link>
<li className='px-[17px] sm:text-2xl md:text-3xl text-[#3C2A21] hover:text-black border-r-[3px] border-[#EB6440]'><Link to="/" className='hover:text-[#3C2A21]'>contact</Link></li>
<li className='px-[17px] sm:text-2xl md:text-3xl text-[#3C2A21]  hover:text-[#3C2A21] border-r-[3px] border-[#EB6440]'><Link to="/" className='hover:text-[#3C2A21]'>help</Link></li>
<li className='pl-[17px] sm:text-2xl md:text-3xl text-[#3C2A21] hover:text-[#3C2A21]'><Link to="/" className='hover:text-[#3C2A21]'><img className='w-[40px]' src="https://img.icons8.com/ios-filled/50/null/place-marker--v1.png"/> 
</Link></li>
<li className='px-[17px] sm:text-2xl md:text-3xl text-[#3C2A21] border-r-[3px] border-[#EB6440] '><Link to="/" className='hover:text-[#3C2A21]'>shop finder 
  </Link></li>

</ul>
<li className='my-auto text-end px-[15px] sm:text-2xl md:text-3xl ] text-[#3C2A21] flex'><Link to="/login" className='hover:text-[#3C2A21]'>sign in / register </Link></li>
{/* <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-sign-in-gaming-ecommerce-flaticons-lineal-color-flat-icons-2.png"/> */}

      </nav>

   
      <nav className='flex items-center  font-serif  py-[15px]  min-[320px]:px-[2rem] sm:px-[6rem]  h-[95px] bg-[#3C2A21] '>
          <p className='text-[#e36b4b] min-[320px]:text-3xl md:text-5xl flex-none'>   <span className='text-[#e36b4b] min-[320px]:text-3xl md:text-6xl italic font-bold flex-none'>B</span>ookshelf</p>
<ul className='flex flex-1 text-[#251749] justify-end  sm:mx-[10px] md:mx-[30px]'>
<li className='min-[320px]:px-[16px] sm:px-[15px] min-[320px]:text-2xl md:text-3xl text-[#E5E5CB] '><Link to="/" className='hover:text-[#E5E5CB]'>home</Link></li>
<li className=' min-[320px]:px-[7px] sm:px-[15px] min-[320px]:text-2xl md:text-3xl text-[#E5E5CB] '><Link to="/items" className='hover:text-[#E5E5CB]'>books</Link></li>
{/* v{/* <li className='px-[15px] sm:text-2xl md:text-3xl text-[#E5E5CB] '><Link to="/items">coming soon</Link></li>
<li className='px-[15px] sm:text-2xl md:text-3xl text-[#E5E5CB] '><Link to="/items">podcast</Link></li>
<li className='px-[15px] sm:text-2xl md:text-3xl text-[#E5E5CB] '><Link to="/items">blog</Link></li> */}

</ul>
          <button className=' ml-auto' onClick={openCart} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" >
 

          <img  className='w-[60px]' src={cart}/>  
          <div className='min-[320px]:w-[1.4rem] min-[320px]:h-[1.4rem] md:w-[33px] md:h-[33px] rounded-full bg-[#E5E5CB] flex justify-center items-center absolute min-[320px]:top-[116px] sm:right-[85px] sm:top-[105px]'>
            <span className='text-[#FF0000]  font-bold text-center '>{cartQuantity}</span>
          </div>
          </button> 

        </nav>
    </div>
  )
}

export default Header
