import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from '../firebase';

const Forgot_Password = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value;
    
   
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)

      navigate('/forgot_login')

    } catch (e) {
    
setErr(true)
    }

    //   try {

    //     const auth = getAuth(app)

    //     sendPasswordResetEmail(auth, email)
    //       .then(() => {
    //         console.log('pass reset email sent')
    //       })
    //   } catch (err) {

    //     setErr(true);
    //   }


  }


  return (
    <div className='formContainer'>

      <div className='formWrapper'>
        <span className="logo">Slime</span>
        <span className="title" id='title'>Forgot Password
        </span>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' />
          <button>send verification email</button>
          {err && <span>Email not registered :(</span>}
        </form>

        <p>Remember Password? <Link to={'/login'}>Login</Link> </p>
      </div>

    </div>
  )
}

export default Forgot_Password