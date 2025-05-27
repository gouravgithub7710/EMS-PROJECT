import React from 'react'
import { useEffect,useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

const [user, setUser] = useState(null)

const handleLogin=(email,password)=>{

if(email=='admin@me.com' && password=='123'){ 
  setUser('admin') 
  console.log(user);
  
 }else if(email=='user@me.com' && password=='123'){
          setUser('employee')
          console.log(user);
          
     }else{
          alert('Invalid Credentials')
          }
}
  return (
    <>
    {!user? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashBoard/> : (user == 'employee' ? <EmployeeDashBoard /> : null) }
   
    </>
  )
}

export default App
