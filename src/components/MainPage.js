import React from 'react'
import Header from './Header'
import items from '../data/items.json'
import Item from '../pages/Item'
import { useState } from 'react'
import FilterProducts from './FilterProducts'
import Footer from './Footer'



const MainPage = () => {

  const [search, setSearch] = useState(items);
  const [filterTextvalue,updateFiltertext] = useState('all')


  // const filteredProducts = items.filter((item) => {
  //     if( item.tags.toLowerCase().includes(search) ||
  //         item.title.toLowerCase().includes(search) ||
  //         item.category.toLowerCase().includes(search)) {
  //         return item;
  //       }
     
  //   });
  
    const filteredProducts = items.filter((item)=>
    {
      if(filterTextvalue==='available'){
        return item.inStock === true;
      }
      else if(filterTextvalue==='notavailable'){
        return item.inStock === false;
      }
      else {
        return item
      }

    }
    )

    function onFilterValueSelected(filterValue) {
        updateFiltertext(filterValue)
    }
    
  return (
    <div className='h-screen'>
        <Header/> 

        <section className='flex mx-[70px] mt-[70px]'>
                {/* <div className=''>
          <input  type="text" onChange={(e)=>{ setSearch(e.target.value.toLowerCase()) }}  placeholder="Search" className='border-b-2	border-gray-200 placeholder-gray-500 mr-[15px]  flex-1  h-[60px]  outline-0	 sm:text-xl md:text-2xl p-[4px]'/>
        </div> */}


              <FilterProducts filterValueSelected={onFilterValueSelected}/>
                      <div className='flex flex-wrap sm:ml-[40px] md:w-[1500px]'>
                              { filteredProducts.map(item => (
                                <div key={item.id} className=""> 
                                  <Item {...item}  />
                                </div>
                              ))}


               
        </div>
      </section>





      <Footer/>
    </div>
  )
}

export default MainPage
