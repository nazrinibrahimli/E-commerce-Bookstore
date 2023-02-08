import React from 'react'
import land from '../assets/images/carousel-1.webp'
import alan from '../assets/images/alan rickman.jpeg'
import Ratings from './Ratings'
import { CartContext } from '../context/CartContext';
import {currencyFormat} from '../utilities/currencyFormat'

const Carousel = () => {

 
  return (
    <div className=''>
        <div className="flex justify-center items-center my-[4rem]">
        <img src={alan} alt="" className='sm:h-[30.25rem] sm:w-[20.31rem]  max-[320px]:w-[220px] max-[320px]:h-[310px]' />
        <div className='ml-[5rem]'>
            <div>
                       <p className='text-[#3C2A21] sm:text-xl md:text-2xl lg:text-2xl font-serif'>
            Madly, Deeply: The Alan Rickman Diaries <br />
            <span className=' sm:text-xl  text-[#144272]'>Alan Rickman (author), Alan Taylor (editor), Emma Thompson (foreword) </span>
            </p>
            <div className=' my-[30px] rounded-full w-[6rem] h-[6rem] bg-[#b80909] flex items-center justify-center'><span className='sm:text-xl md:text-2xl lg:text-2xl text-center  text-white font-serif'>SALE</span>
</div>
            </div>
 


<p className='sm:text-xl md:text-2xl lg:text-2xl font-sans text-[#820000]'><span className='text-gray-400 line-through'>$53.50</span> $45.35 </p>
<button  className="mt-[30px] font-sans text-md  font-bold text-[#FFFBEB]  w-[130px]  bg-[#EB6440] rounded-full p-[10px] ">
                add to cart
    </button>
        </div>
      
        </div>
     
    </div>
  )
}

export default Carousel
