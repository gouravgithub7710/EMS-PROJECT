import React, { useContext } from 'react'
import { useEffect,useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

const [user, setUser] = useState(null)
const authData = useContext(AuthContext)

useEffect(() => {
  
if(authData){
const loggedInUSer = localStorage.getItem("loggedInUser")
if(loggedInUSer){setUser(loggedInUSer.role)}
}
}, [authData])



const handleLogin=(email,password)=>{

if(email=='admin@me.com' && password=='123'){ 
  setUser('admin') 
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  
 }else if(authData && authData.employees.find((e)=>email==e.email 
&& password==e.password)){
          setUser('employee')
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
          
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
