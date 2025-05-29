import React from 'react'

const NewTask = () => {
  return (
    <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-green-400 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
      <h4 className='text-sm'>20 May 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Create a Website</h2>
      <p className='text-sm mt-5'>Design a personal portfolio showcasing your skills, projects, and contact info using modern frontend tools.</p>
      <div className='mt-4'>
        <button className='w-full bg-blue-700 rounded py-1 items-center'>
        Accept Task
        </button>
      </div>
      </div>
  )
}

export default NewTask
