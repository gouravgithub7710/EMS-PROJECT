import React from 'react'

const CompleteTask = ({data}) => {
  return (
     <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
      <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-5'>{data.taskDescription}</p>
      <div className='mt-4 '>
        <button className='w-full bg-green-700 rounded py-1 items-center'>Complete</button>
      </div>
      </div>
  )
}

export default CompleteTask
