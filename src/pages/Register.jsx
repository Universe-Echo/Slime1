import React from 'react'
import Add from '../img/avatarpng.png'
const Register = () => {
  return (
    <div className='formContainer'>

      <div className='formWrapper'>
        <span className="logo">Slime</span>
        <span className="title">Sign up</span>

        <form>
          <input type="text" placeholder='Nickname' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="file" placeholder='Avatar' id='file' style={{ display: 'none' }} />
          <label htmlFor="file"> <img src={Add} alt="" /> <span>Add profile pic</span> </label>
          <button>Sign up</button>
        </form>
        <p>Have an account already? Login</p>
      </div>

    </div>
  )
}

export default Register