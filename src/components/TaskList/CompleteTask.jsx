import React from 'react'

const CompleteTask = () => {
  return (
     <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
      <h4 className='text-sm'>20 May 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Use API to Fetch Data</h2>
      <p className='text-sm mt-5'>Fetch and display real-time data from a public API using JavaScript and display it on your page.</p>
      <div className='mt-4 '>
        <button className='w-full bg-green-700 rounded py-1 items-center'>Complete</button>
      </div>
      </div>
  )
}

export default CompleteTask
