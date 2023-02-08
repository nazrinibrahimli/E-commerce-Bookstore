import React from 'react'

const FilterbyAuthor = () => {
  return (
    <div>
          <div className='filter-area w-[700px] p-[2px] '>
        <label htmlFor="avaibality" className='block mb-2 text-2xl  text-gray-900 dark:text-white'>Select by</label>
      <select name='inStock' onChange={onFilterChanged} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[140px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="all" className=''>James Clear</option>
        <option value="available">Colleen Hoover</option>
        <option value="notavailable">Approaching</option>
      </select>
    </div>
    </div>
  )
}

export default FilterbyAuthor
