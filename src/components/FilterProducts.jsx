import React from 'react'

const FilterProducts = (props) => {

function onFilterChanged(e){
    props.filterValueSelected(e.target.value)
}



  return (
    <div className='filter-area w-[400px] p-[2px] '>
        <label htmlFor="avaibality" className='font-sans block mb-2 text-2xl  text-gray-900 dark:text-white'>Select by</label>
      <select name='inStock' onChange={onFilterChanged} className="font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[140px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="all" className=''>All</option>
        <option value="available">In Stock</option>
        <option value="notavailable">Approaching</option>
      </select>
    </div>
  )
}

export default FilterProducts
