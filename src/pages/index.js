import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Home() {

  const router = useRouter()
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-orange-300 flex flex-col justify-center relative overflow-hidden sm:py-12">
          <span className="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">Sign In</span>
          <div className="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
            <form action="">
            <label className="block">Username or Email</label>
            <input type="Email" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Username or Email" onChange={e => setEmail(e.target.value)}/>
            <label className="block">Password</label>
            <input type="password" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="password" onChange={e => setPassword(e.target.value)}/>
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div className="flex items-center">
                <input id="remember" aria-describedby="remember" type="checkbox" 
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
              </div>
              <div className="text-sm ml-3 ">
                  <label className="font-medium text-gray-900">Remember me</label>
              </div>
          </div>
            <div className="">
              <a href="#" onClick={ () => alert(handleLostPass(email))} className="block text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500 ">Lost Password?</a>
              <a href="/register" className="block text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500 ">Register</a>
            </div>
          </div>
            <button onClick={()=>router.push('/feed')} className="mt-5 bg-orange-300 hover:bg-blue-200 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded">Login</button>
            </form>
        </div>
    </div>
  </>
  )
}

function handleLostPass(email){
  if (email!==""){
    return ("A recovery OTP has been sent to the following e-mail: " + email)
  }
  else{
    return ("Please enter a valid e-mail.")
  }
}