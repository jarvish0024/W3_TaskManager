import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-[100vw] h-[100vh] bg-gray-400 flex justify-center items-center'>
        <div className=' bg-white w-[30%]  p-4 rounded-md' >
            <h1 className='text-2xl font-semibold'>Login</h1>
            <div className='mt-5'>
                <form action="submit" className='flex flex-col gap-3'>
                    
                    <div className='flex flex-col gap-1'>
                        <label className='text-lg font-semibold'>Email Adddress</label>
                        <input className='border border-black rounded-md px-4 py-2 ' type="email" placeholder="Email" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-lg font-semibold'>Password</label>
                        <input className='border border-black rounded-md px-4 py-2 ' type="password" placeholder="Password" />
                    </div>
                    <button className='border border-black rounded-md px-4 py-2 font-semibold bg-blue-800 text-white mt-5'>Login</button>
                    <p className='text-center my-4'>Already have an account?<Link to='/register' className='font-semibold text-blue-800'>Signup</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login