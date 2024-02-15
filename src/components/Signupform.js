import React, { useState } from 'react'

const Signupform = () => {
    const [showpassword, setShowpassword] = useState(false)
    const [formData, setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confirmpassword:""})
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

            <form>
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
                    </label>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Signupform