import React from 'react'
const Medium = () => {
  return (
    <div className='h-[420px]  bg-book bg-cover bg-center opacity-95  sm:mx-[10rem] lg:mx-[250px] rounded-3xl  mt-[150px] '>
      <div className='pt-[35px] '>
        <p className='font-bold sm:text-4xl lg:text-5xl text-center text-white'>Get 20% off!</p>
        <p className=' sm:text-2xl lg:text-4xl mt-[20px] text-white text-center px-[10px]'>Enter you email address to get your <br /> 20% off Discount Code.</p>

        <div className="flex justify-center mt-[35px]">
        <input type="email" name="" id="" placeholder='  Email' className='cursor-pointer outline-0 rounded-xl font-sans sm:w-[230px] lg:w-[400px] h-[65px] '/>
        <button className='ml-[10px] rounded-xl w-[100px] p-[5px]  bg-[#EB6440]  h-[65px] text-white font-sans hover:bg-[#e8552e]'>sign up</button>


        </div>
      
    
      </div>

 
    </div>

  )
}

export default Medium

