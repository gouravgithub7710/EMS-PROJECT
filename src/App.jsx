import React from 'react'
import { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  
  // useEffect(() => {
  //   //setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)
  
  return (
    <>
    <Login />
    {/* <EmployeeDashBoard/> */}
    {/* <AdminDashBoard /> */}
    </>
  )
}

export default App
