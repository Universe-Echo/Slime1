import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from '../firebase';

const Forgot_Password_Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();




  return (
    <div className='formContainer'>

      <div className='formWrapper'>
    
        <span className="title" id='title'>Please check your email to reset your password.. keep it safe ;)
        </span>



        <p><Link to={'/login'}>Login</Link> </p>
      </div>

    </div>
  )
}

export default Forgot_Password_Login