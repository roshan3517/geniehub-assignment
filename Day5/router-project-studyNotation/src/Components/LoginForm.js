import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link ,useNavigate} from 'react-router-dom'; // Import Link from 'react-router-dom'
import {toast } from "react-hot-toast";

const LoginForm = ({setIsLoggedIn}) => {

  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In"); // Change "sucess" to "success"
    navigate("/dashboard");

  }

  return (
    <div>
      <form  onSubmit={submitHandler}
      className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
        </label>

        <label className='w-full relative'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>
          <input
            required
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter email id"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
          <span onClick={() => setShowPassword((prev) => !prev)}
          className='absolute top-[38px] right-3 cursor-pointer'>
            {showPassword ? 
            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> ):
            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
          </span>

          {/* Use Link to create a link */}
          <Link to="/forgot-password" className='flex '>
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot password</p>
          </Link>
        </label>

        <button  className="bg-yellow-50 rounded-[8px] font-medium  text-richblack-900 px-[12px] py-[8px] mt-6">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
