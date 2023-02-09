import React from 'react';
import rich from "../assets/images/rich.webp"
import master from "../assets/images/master.jpeg"
import outliers from "../assets/images/outliers.jpeg"
import investor from "../assets/images/investor.jpeg"
import orwell from "../assets/images/1984.jpeg"
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div className='  bg-cover   mx-auto bg-white  h-[970px] p-[20px]  '>

<div id="carouselExampleSlidesOnly" class="carousel slide relative " data-bs-ride="carousel">
  <div class="carousel-inner relative w-full  ">
    <div class="carousel-item  active relative w-full ">
      <div className='flex justify-center'>
      <img src={outliers} alt=""  className='min-[320px]:w-[0px] lg:w-[16.25rem] h-[380px] rounded-lg  shadow-md mt-[120px] mr-[20px] '/>
      <img src={investor} alt=""  className=' w-[290px] h-[440px] rounded-lg  shadow-2xl mt-[100px]  mr-[20px] '/>
      <img src={orwell} alt=""  className='min-[320px]:w-[0px] lg:w-[16.25rem]   h-[380px] rounded-lg  shadow-md  mt-[120px] '/>



      </div>

    </div>
    <div class="carousel-item  relative  w-full">
    <div className='flex justify-center '>
      <img src={rich} alt=""  className='min-[320px]:w-[0px] lg:w-[16.25rem] h-[380px] rounded-lg  shadow-md mt-[120px] mr-[20px]'/>
      <img src={orwell} alt=""  className=' w-[290px] h-[440px] rounded-lg  shadow-2xl  mt-[100px]  mr-[20px]'/>
      <img src={master} alt=""  className='min-[320px]:w-[0px] lg:w-[16.25rem] h-[380px] rounded-lg  shadow-md  mt-[120px]'/>


      </div>
    </div>

  </div>
  <p className='text-3xl font-semibold text-center px-[20px] pt-[70px] text-[#3C2A21] '>New York Times Best Sellers <br /> with <span className='text-[#D70040] italic text-4xl'>50% discount</span>  offer to our student community.  </p>
    <button className='grid mx-auto text-xl  font-bold text-[#FFFBEB]  w-[180px]  bg-[#3C2A21] rounded-full p-[10px] text-center mt-[32px] '> <Link to="/items" className='hover:text-[#FFFBEB]'>shop now</Link> </button>
</div>







</div>








      


  )
}

export default Landing
