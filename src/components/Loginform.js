import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const Loginform = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({
        email:"",password:""
    })

    const [showpassword, setShowpassword] = useState(false)
    
    function changeHandler(event){
        setFormdata( (prevData) => (
            {
            ...prevData,
            [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("Logged In")
        navigate("/dashboard")
    }
    
  return (
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input type="email" 
                    required 
                    value={formdata.email} 
                    placeholder='Enter Email Addresh' 
                    name='email' 
                    onChange={changeHandler}  
                />
            </label>
            <label>
                <p>
                    Password<sub>*</sub>
                </p>
                <input type={showpassword ? ("text") : ("password") } 
                    required 
                    name='password' 
                    value={formdata.password} 
                    placeholder='Enter Password' 
                    onChange={changeHandler}
                />
            </label>
            
            <span onClick={()=>setShowpassword((prev)=> !prev)}>
                {showpassword ? (AiOutlineEyeInvisible) : (AiOutlineEye)}
            </span>

            <Link to="#">
                <p>
                    Forget Password
                </p>
            </Link>

            <button>
                Sign In
            </button>

        </form>
  )
}

export default Loginform