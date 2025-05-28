import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 w-full py-5 flex-nowrap mt-10'>


      <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
      <h4 className='text-sm'>20 May 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Deploy a project</h2>
      <p className='text-sm mt-5'>Deploy a web project online using platforms like Vercel, Netlify, or GitHub Pages easily.</p>
      </div>


 <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
      <h4 className='text-sm'>20 May 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Create a Website</h2>
      <p className='text-sm mt-5'>Design a personal portfolio showcasing your skills, projects, and contact info using modern frontend tools.</p>
      </div>

       <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-green-400 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
      <h4 className='text-sm'>20 May 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Use API to Fetch Data</h2>
      <p className='text-sm mt-5'>Fetch and display real-time data from a public API using JavaScript and display it on your page.</p>
      </div>


       <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-fuchsia-700 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
      <h4 className='text-sm'>20 May 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Host on GitHub Pages</h2>
      <p className='text-sm mt-5'>Upload your static website to GitHub and make it live using GitHub Pages in minutes.</p>
      </div>


       <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
      <h4 className='text-sm'>20 May 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Build a Login Page</h2>
      <p className='text-sm mt-5'>Create a simple login form using HTML, CSS, and JavaScript with basic validation features.</p>
      </div>

       <div className=' h-full p-5 flex-shrink-0 w-[300px] bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
      <h4 className='text-sm'>20 May 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Integrate Contact Form</h2>
      <p className='text-sm mt-5'>Add a working contact form using EmailJS or Formspree to receive messages directly in your inbox.</p>
      </div>
     
      
    </div>
  )
}

export default TaskList
