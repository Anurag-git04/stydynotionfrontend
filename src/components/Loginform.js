import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Loginform = () => {
    const [formdata, setFormdata] = useState({email:"",password:""})
    const [showpassword, setShowpassword] = useState(false)
    function changeHandler(event){
        setFormdata((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
  return (
    <div>
        <form action="">
            <label>
                <p>
                    Email Address<sub>*</sub>
                </p>
                <input type="email" required value={formdata.email} placeholder='Email Address' name='email' onChange={changeHandler}  />
            </label>
            <label>
                <p>
                    Password<sub>*</sub>
                </p>
                <input type={showpassword ? ("text") : ("password") } required name='password' value={formdata.password} placeholder='Enter Password' onChange={changeHandler}  />
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
       
    </div>
  )
}

export default Loginform