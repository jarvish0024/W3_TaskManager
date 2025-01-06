import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();    
    axios.post('http://localhost:8080/register',{name,email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))

};



  return (
    <div className="w-[100vw] h-[100vh] bg-gray-400 flex justify-center items-center">
      <div className=" bg-white w-[30%]  p-4 rounded-md">
        <h1 className="text-2xl font-semibold">Registration</h1>
        <div className="mt-5">
          <form  onSubmit={handleSubmit}  className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold">Full Name</label>
              <input
                className="border border-black rounded-md px-4 py-2 "
                type="text"
                placeholder="Username"
                onClick={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold">Email Address</label>
              <input
                className="border border-black rounded-md px-4 py-2 "
                type="email"
                placeholder="Email"
                onClick={(e)=>setEmail(e.target.value)}

              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold">Password</label>
              <input
                className="border border-black rounded-md px-4 py-2 "
                type="password"
                placeholder="Password"
                onClick={(e)=>setPassword(e.target.value)}

              />
            </div>
            <button type="submit" className='border border-black rounded-md px-4 py-2 font-semibold bg-blue-800 text-white mt-5'>Register</button>

            <p className="text-center mt-2">
              Create have an account?{" "}
              <Link to="/login" className="font-semibold text-blue-800">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
