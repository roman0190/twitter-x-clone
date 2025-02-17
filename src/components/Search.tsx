import React from 'react'
import Image from './Image'
const Search = () => {
  return (
    <div className='flex items-center bg-inputGray py-2 px-4 gap-4 rounded-full'>
        <div><Image path="icons/explore.svg" alt="alt" w={16} h={16} /></div>
        <input type="text" placeholder='Search' className='bg-transparent outline-none placeholder:text-textGray'/>
    </div>
  )
}

export default Search