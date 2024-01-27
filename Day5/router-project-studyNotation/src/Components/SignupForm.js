import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

  const navigate=useNavigate();

  const[formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""

  });
  
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const  [accountType,setAccountType]=useState("student");

  function changeHandler(event) {

    setFormData( (prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ) )

}
  function submitHandler(event){
    event.preventDefault();
    if(formData.password!==formData.confirmPassword){
        toast.error("passwords do not match");
        return;
    }
    setIsLoggedIn(true);
    toast.success("Create Account");
    navigate("/dashboard");

    const accountData={
        ...formData
    };

    const finalData={
        ...accountData,
        accountType
    }
    console.log(finalData);

  }

    

  
  return (
    <div  onSubmit={submitHandler}
>
        {/* student-instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button 
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                student
            </button>
            <button
             className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form className='flex flex-col w-full gap-y-4 mt-6 '>
        {/* first name and lastName */}
            <div className='w-full flex gap-x-4 mt-[10px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>first Name <sup className='text-pink-200'>*</sup></p>
                    <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder='Enter First Name'
                    value={formData.firstName}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />

                </label>

                <label className='w-full'>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>last Name <sup className='text-pink-200'>*</sup></p>
                    <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder='Enter last Name'
                    value={formData.lastName}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />

                </label>

            </div>
        {/* email address */}
            <label className='mt-[10px]'>
                <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    value={formData.email}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                    />
            </label>

        {/* createpassword and confirm password */}
            <div  className='w-full flex gap-x-4 mt-[10px]'>
                <label className='w-full relative'>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type={showPassword?("text"):("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder='Enter password'
                        value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                    />
                    <span onClick={()=>setShowPassword((prev)=>!prev)}
                    className='absolute top-[35px] right-3 cursor-pointer'>
                    {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)    
                    :(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className=' w-full relative'>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm password<sup className='text-pink-200'>*</sup></p>
                    <input
                      required
                      type={showConfirmPassword ? 'text' : 'password'} // Use showConfirmPassword here
                      name="confirmPassword"
                      onChange={changeHandler}
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className='absolute top-[35px] right-3 cursor-pointer'> {/* Use setShowConfirmPassword */}
                        {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> 
                        : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                    </span>
                </label>

            </div>

            <button className="bg-yellow-50 rounded-[8px] font-medium  text-richblack-900 px-[12px] py-[8px] mt-6">
                Create Account
            </button>

        </form>
      
    </div>
  )
}


export default SignupForm
