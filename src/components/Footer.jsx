import React from 'react'



const Footer = () => {
  return (
    <div className='h-[400px] '>
      <footer className='h-full  bg-[#3C2A21] pt-[100px] '>
        <div className="flex justify-around ">
        <div className="block ">
          <ul className=''>
            <li className='py-[10px] text-2xl font-sans text-[#E5E5CB] font-semibold'>Contact</li>
            <li className='py-[10px] text-2xl font-sans text-[#E5E5CB] '>Support</li>
            <li className='py-[10px] text-2xl font-sans text-[#E5E5CB] '>+1(875) 457-9856</li>
            <li className='py-[10px] text-2xl font-sans text-[#E5E5CB] '>Broadway,Brooklyn,NY</li>

          

          </ul>
        </div>
        <div className="block ">
          <ul className=''>
            <li className='py-[10px] text-2xl font-sans text-[#E5E5CB] font-semibold'>To the Customer</li>
            <li className='py-[10px] text-2xl font-sans text-[#E5E5CB] '>Gift Cards</li>
            <li className='py-[10px] text-2xl font-sans text-[#E5E5CB] '>Returns and Refund</li>
            <li className='py-[10px] text-2xl font-sans text-[#E5E5CB] '>Deliveries</li>


          </ul>
        </div>
        <div className="block ">
          <ul className=''>
          <li className='py-[10px] text-2xl font-sans text-[#E5E5CB] font-semibold'>Get notified from us!</li>
          <div className=' '>
        <div className="social-accounts ">

    </div>

  
      <input type="email" name="" id="" placeholder='  Email' className='cursor-pointer outline-0 rounded-xl font-sans sm:w-[230px] lg:w-[400px] h-[65px] '/>
        <button className='ml-[10px] rounded-xl w-[100px] p-[5px]  bg-[#EB6440]  h-[65px] text-white font-sans hover:bg-[#e8552e]'>Subscribe</button>

  
        </div>
          </ul>
        </div>
     


        </div>

 
      </footer>
    </div>
  )
}

export default Footer
