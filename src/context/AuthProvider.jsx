// import React,{createContext,useState,useEffect} from 'react'
// import { getLocalStorage } from '../utils/localStorage'
// import {setLocalStorage } from '../utils/localStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({children}) => {

//  const [userData, setUserData] = useState(null)

//  useEffect(() => {
//   setLocalStorage()
//   const {employees,admin} = getLocalStorage()
//   setUserData({employees,admin})
//  }, [])
 

  
//   return (
//     <div>
//       <AuthContext.Provider value={userData}>
//         {children}
//       </AuthContext.Provider>
//     </div>
//   )
// }

// export default AuthProvider






import React,{createContext,useState,useEffect} from 'react'
import { getLocalStorage } from '../utils/localStorage'
import {setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

 const [userData, setUserData] = useState(null)

 useEffect(() => {
  setLocalStorage()
  const {employees,admin} = getLocalStorage()
  setUserData({employees,admin})
 }, [])

 // ✅ NEW: Context refresh function
 const refreshUserData = () => {
   const {employees, admin} = getLocalStorage()
   setUserData({employees, admin})
 }
 
  return (
    <div>
      <AuthContext.Provider value={{...userData, refreshUserData}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider