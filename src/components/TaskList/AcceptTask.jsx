import React from 'react'

const AcceptTask = () => {
  return (
  
      <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
      <h4 className='text-sm'>20 May 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Deploy a project</h2>
      <p className='text-sm mt-5'>Deploy a web project online using platforms like Vercel, Netlify, or GitHub Pages easily.</p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
      </div>
      </div> 
    
  )
}

export default AcceptTask
