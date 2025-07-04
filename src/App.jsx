import React, { useContext } from 'react'
import { useEffect,useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const authData = useContext(AuthContext)

useEffect(() => {
 const loggedInUser= localStorage.getItem('loggedInUser')
if(loggedInUser){
 const userData = JSON.parse(loggedInUser)
setUser(userData.role)
   setLoggedInUserData(userData.data)
  }
},[])



const handleLogin=(email,password)=>{

if(email=='admin@me.com' && password=='123'){ 
  setUser('admin') 
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  
 }else if(authData){
  const employee = authData.employees.find((e)=>email==e.email 
&& password==e.password)
if(employee){
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
}
     }else{
          alert('Invalid Credentials')
          }
}


  return (
    <>
    {!user? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashBoard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashBoard changeUser={setUser} data={loggedInUserData}/> : null) }
   
    </>
  )
}

export default App
