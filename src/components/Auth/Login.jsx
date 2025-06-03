import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const submitHandler =(e)=>{
  e.preventDefault();
handleLogin(email,password)
setEmail('');
setPassword('');
}

  return (
   <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
  <div className="border-2 border-emerald-500 p-10 rounded-xl shadow-lg bg-gray-800">
    <form 
    onSubmit={(e)=>{
      submitHandler(e);
    }}
    className="flex flex-col items-center space-y-5 w-72">
      <input
        value={email}
      onChange={(e)=> {
       setEmail(e.target.value)
      }}
        type="email"
        required
        placeholder="Enter your email"
        className="w-full py-3 px-5 outline-none bg-transparent border-2 border-emerald-500 text-white text-lg rounded-full placeholder:text-gray-400"
      />
      <input
        value={password}
      onChange={(e)=> {
       setPassword(e.target.value)}
      }
        type="password"
        required
        placeholder="Enter your password"
        className="w-full py-3 px-5 outline-none bg-transparent border-2 border-emerald-500 text-white text-lg rounded-full placeholder:text-gray-400"
      />
      <button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-full transition duration-300"
      >
        Login
      </button>
    </form>
  </div>

  <div className="absolute bottom-5 text-gray-400 text-sm">
  <div  className="flex flex-col items-center space-y-2">
    <h1>Admin:</h1>
Email: admin@me.com
Password: 123
  </div>
    <div className="flex flex-col items-center space-y-2 mt-5">
    <h1  >Employee: </h1>
 
Email: e@e.com
Password: 123
    </div>
 </div>
</div>

  )
}

export default Login
