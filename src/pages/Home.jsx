import React from 'react'
import Header from '../components/Header'
import items from '../data/items.json'
import Item from './Item'
import ShoppingCart from '../components/ShoppingCart'
import Landing from '../components/Landing'
import { useState } from 'react'
import Medium from '../components/Medium'
import MainPage from '../components/MainPage'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import OneBook from '../components/OneBook'
import Carousel from '../components/Carousel'
import alan from '../assets/images/alan rickman.jpeg'
import ad from '../assets/images/for-ad.webp'


const Home = () => {



  return (
    <div className='bg-white'>
      <Header/>
      <Landing/>
      <Medium/>

      <section className='filtering-items mt-[180px] mx-[6rem] mb-[80px] '>
           <div className=' mx-auto'>
            <div className="lg:flex justify-between ">
           <p className='w-[100px] border-l-[7px] border-[#EB6440] pl-[18px] lg:text-4xl sm:text-3xl  font-semibold text-[#1A120B] pt-[40px]  mt-[30px] mb-[70px] font-serif'>Beautifully Written Books by Women</p>
           </div>
           <div className='flex flex-wrap  lg:justify-between min-[320px]:justify-center'>
                { items.map(item => (
                  item.id>11&&item.id<17 ?<div key={item.id} className=""> 
                    <Item {...item}  />
  
                   </div> :null
                ))}
            </div>

                    

{/*     
    <div className='h-[12rem]  rounded-xl flex items-center justify-center my-[180px]'>
                    </div> */}


<Carousel/>


        <div className='lg:flex justify-between '> 
            <p className='w-[100px] border-l-[7px] border-[#EB6440] pl-[18px] lg:text-4xl sm:text-3xl  font-semibold text-[#1A120B]  mt-[30px] pt-[40px]  mb-[70px] font-serif'>New Release Books</p>
             {/* <p className='font-sans md:text-2xl sm:text-xl underline text-[#EB6440]  lg:pt-[40px]  sm:mb-[35px] lg:mt-[30px]  '><Link to="/items">View all</Link></p> */}
        </div>

           <div className='flex flex-wrap  lg:justify-between min-[320px]:justify-center'>
                { items.map(item => (
                  item.id<6?<div key={item.id} className=""> 
                    <Item {...item}  />
  
                   </div> :null
                ))}
        </div>


                    <OneBook/>

        <div className='lg:flex justify-between '> 
        <p className='w-[100px] border-l-[7px] border-[#EB6440] pl-[18px] lg:text-4xl sm:text-3xl   font-semibold text-[#1A120B] pt-[40px] mt-[30px] mb-[70px]  font-serif '>Trending and Best Sellers</p>
        </div>

           <div className='flex flex-wrap lg:justify-between min-[320px]:justify-center'>
                { items.map(item => (
                  item.id>5&&item.id<11 ?<div key={item.id} className=""> 
                    <Item {...item}  />
  
                   </div> :null
                ))}
        </div>
  


</div>
    </section>
<Footer/>
    </div>
  )
}

export default Home
