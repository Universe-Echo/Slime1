import React from 'react'
import Add from '../img/avatarpng.png'
const Login = () => {
  return (
    <div className='formContainer'>

      <div className='formWrapper'>
        <span className="logo">Slime</span>
        <span className="title">Login</span>

        <form>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="file" placeholder='Avatar' id='file' style={{ display: 'none' }} />
          <button>Login</button>
        </form>

        <p>Don't have an account yet? Sign up</p>
      </div>

    </div>
  )
}

export default Login