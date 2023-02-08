import React from 'react'
import { CartContext } from '../context/CartContext'
import allItems from '../data/items.json'
import {currencyFormat} from '../utilities/currencyFormat'



const CartItem = ({id, quantity}) => {

const {removeFromCart} = CartContext()
const {increaseItemQuantity} = CartContext()
const {decreaseItemQuantity} = CartContext()
const item = allItems.find(i=> i.id===id)

if (item ==null) return null


  return (


        <div className='flex pb-[20px]'>

        <img src={item.image} alt="" className='h-[150px] w-[100px] pl-[9px]' />
      <div className='ml-[10px] mx-[10px] flex-1'>

          <div className='flex justify-between'>
          <p className='text-2xl'>{item.title} </p>

           <div className=' ml-auto text-xl font-bold'>
                {currencyFormat(item.price*quantity)}

           </div>


       </div>

      <div className='flex my-[20px] '>
      <button className='text-2xl w-[40px] border-2 ' onClick={()=> decreaseItemQuantity(id)}>-</button>
      <p className='text-2xl mx-[5px]'>{quantity}</p>
      <button className='text-2xl w-[40px] border-2' onClick={()=> increaseItemQuantity(id)}>+</button>
      </div>


        <div className='flex justify-between'>
        <p className='text-xl '>{currencyFormat(item.price)}</p>
      <button className='ml-auto w-[40px] border-2 text-2xl' onClick={()=> removeFromCart(id)}>
                            x
                </button>
        </div>

      </div>

        </div>

 


  )
}

export default CartItem
