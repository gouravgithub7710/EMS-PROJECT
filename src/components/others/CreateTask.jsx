import React, { useState } from 'react'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const sumbitHandler = (e) => {
    e.preventDefault()
    
    setNewTask({taskTitle, taskDescription, taskDate, category,active:false,newTask:true,failed:false,completed:false})

   const data = JSON.parse(localStorage.getItem('employees'))
  
   data.forEach((e)=>{
    if(assignTo==e.firstName){
      e.tasks.push(newTask)
    }
   })

   localStorage.setItem('employees', JSON.stringify(data))
   setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    
    
  }
  return (
    <div className='p-5 bg-[#1c1c1c]  rounded mt-5' >
        <form onSubmit={(e)=>{
          sumbitHandler(e)
        }} 
        className='flex flex-wrap items-start justify-between'>
        <div className='w-1/2'>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
           type="text" className='text-sm outline-none bg-transparent  rounded py-1 px-2  w-4/5 border-[1px] border-gray-400 mb-4' placeholder='Enter task title' />
           <div/>
          <h3 className='text-sm text-gray-300 mb-0.5'>Due Date</h3>
          <input 
          value={taskDate}
            onChange={(e)=>{
              setTaskDate(e.target.value)
            }}
          type="date" className='text-sm outline-none bg-transparent  rounded py-1 px-2  w-4/5 border-[1px] border-gray-400 mb-4' />
          <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
          <input 
          value={assignTo}
            onChange={(e)=>{
              setAssignTo(e.target.value)
            }}
          type="text" className='text-sm outline-none bg-transparent  rounded py-1 px-2  w-4/5 border-[1px] border-gray-400 mb-4' placeholder='Enter employee name or ID' />
          <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
          <input 
          value={category}
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
          type="text" className='text-sm outline-none bg-transparent  rounded py-1 px-2  w-4/5 border-[1px] border-gray-400 mb-4' placeholder='Enter task category Ex- Design, Dev, Deploy, etc' />
          </div>
          </div>
           <div className='w-2/5 flex flex-col items-start'>
         <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea 
          value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value)
            }}
          className='w-full text-sm h-44 py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400 rounded mb-4' placeholder='Enter task description' rows="6"></textarea>

          <button type="submit" className='text-sm bg-emerald-500 text-white px-5 py-3 mt-4 w-full rounded hover:bg-emerald-600'>Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
