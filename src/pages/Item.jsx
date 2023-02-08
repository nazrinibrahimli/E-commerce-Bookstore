import React from 'react'
import { useState, useContext,createContext } from "react";
import Ratings from '../components/Ratings';
import { CartContext } from '../context/CartContext';
import {currencyFormat} from '../utilities/currencyFormat'


const Item = ({id,title, price, image, author}) => {

  const {getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart} = CartContext();
  const  quantity= getItemQuantity(id) 
  return (
    <div className='mb-[50px] mr-[15px]'>

      <img className='w-[220px] h-[310px] rounded-2xl hover:opacity-75  p-[15px]  ' src={image} alt="book" />
      <div className=' '>
      <p className='text-2xl h-[70px] font-bold  text-center mt-[15px] text-[#3C2A21] w-[220px] font-sans'>{title} </p>
      <p className='text-xl mt-[5px] text-center text-[#1A120B] capitalize font-sans'>{author} </p>
      <Ratings/>
    
      {quantity===0? (<button  onClick={()=> increaseItemQuantity(id)} className="hover:bg-[#e8552e] font-sans grid mx-auto  text-xl  font-bold text-[#FFFBEB]  w-[130px]  bg-[#EB6440] rounded-full p-[10px] text-center mt-[12px] ">
      {currencyFormat(price)}
    </button>) : <div className='  mt-[12px]'>
      
      <div className='flex justify-center items-center '>
      <button onClick={()=> decreaseItemQuantity(id)}  className="mt-[3px] bg-[#EB6440] text-white font-bold py-2 px-4 rounded ">-</button>
      <span className='mx-[20px] text-2xl  text-[#EB6440] font-sans'> {quantity} in cart</span>
      <button onClick={()=> increaseItemQuantity(id)}  className="mt-[3px] bg-[#EB6440]  text-white font-bold py-2 px-4 rounded ">+ </button>
      </div>
      {/* <button onClick={()=> removeFromCart(id)}  className="bg-[#FF0000] hover:bg-[#EE4B2B] text-white font-bold py-2 px-4 rounded mt-[15px] block mx-auto">remove</button> */}
      </div>} 

      
   </div>
   </div>
 
  )
}

export default Item
