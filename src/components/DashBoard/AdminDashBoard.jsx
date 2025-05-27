import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'

const AdminDashBoard = () => {
  return (
    <div className='p-10 h-screen w-full'>
      <Header/>
      <CreateTask />
    </div>
  )
}

export default AdminDashBoard
