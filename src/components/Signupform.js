import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const Signupform = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [showpassword, setShowpassword] = useState(false)
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpassword:""})
    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmpassword){
            toast.error("Password do not match")
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account created");
        const accountData = {
            ...formData
        };
        console.log("Printing account data ")
        console.log(accountData)

        navigate("/dashboard")
    }
  return (
    <div>
        {/* student Instructor Tag  */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

            <form onSubmit={submitHandler}>
                {/* FirstName & LastName  */}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                        required
                        type='text'
                        name='firstname'
                        onChange={changeHandler}
                        placeholder='Enter Your First Name'
                        value={formData.firstName}
                        />
                    </label>
                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                        required
                        type='text'
                        name='Lastname'
                        onChange={changeHandler}
                        placeholder='Enter Your Lasr Name'
                        value={formData.lastName}
                        />
                    </label>
                </div>
                {/* Email  */}
                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                       required
                       type='email'
                       name='email'
                       onChange={changeHandler}
                       placeholder='Enter Your Email'
                       value={formData.email}
                    />
                </label>

                {/* create password confirm password */}
                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                        required
                        type={showpassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                        />
                        <span onClick={()=>setShowpassword((prev)=> !prev)}>
                            {showpassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                         </span>
                    </label>

                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                        required
                        type={showpassword ? ("text") : ("password")}
                        name='confirmpassword'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.confirmpassword}
                        />
                        <span onClick={()=>setShowpassword((prev)=> !prev)}>
                            {showpassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                         </span>
                    </label>
                </div>

                <button >
                    Create Account
                </button>

            </form>
        
    </div>
  )
}

export default Signupform