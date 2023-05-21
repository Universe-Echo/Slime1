import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const Login = () => {


  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [err1, setErr1] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value;
    const password = e.target[1].value;


    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')

    } catch (err) {
      // console.log(err.message)
      setErr(true);
      if (err.message === 'Firebase: Error (auth/user-not-found).') {
        setErr1('Invalid Email')
      }

      else if (err.message === 'Firebase: Error (auth/wrong-password).') {
        setErr1('Invalid Password')

      }
      else if (err.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
        setErr1('Too many requests!')
      }
      else {
        setErr1(`${err.message}`)
      }
    }

  }


  return (
    <div className='formContainer'>

      <div className='formWrapper'>
        <span className="logo">Slime</span>
        <span className="title">Login</span>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' required/>
          <input type="password" placeholder='Password' required/>
          <button>Login</button>
          {err && <span>{err1}</span>}
        </form>

        <p>Don't have an account yet? <Link to={'/register'}>Sign up</Link> - <Link to={'/forgot'}>Forgot Password</Link> </p>
      </div>

    </div>
  )
}

export default Login