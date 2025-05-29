import React from 'react'

const FailedTask = () => {
  return (
     <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-fuchsia-700 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
      <h4 className='text-sm'>20 May 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Host on GitHub Pages</h2>
      <p className='text-sm mt-5'>Upload your static website to GitHub and make it live using GitHub Pages in minutes.</p>
      
    <div className='mt-4 '>
        <button className='w-full bg-red-500 rounded py-1 items-center'>Failed</button>
      </div>
      
    </div>
  )
}

export default FailedTask
