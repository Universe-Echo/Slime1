import { signOut } from 'firebase/auth'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'



const Navbar = () => {

  const { currentUser } = useContext(AuthContext)
 
  return (
    <div className='navbar'>
      {/* <span className="logo">Slime</span> */}
      <div className="user">
        <img src={currentUser.photoURL ? currentUser.photoURL : 'https://avatarfiles.alphacoders.com/211/thumb-211248.jpg'} alt=""/>
        
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)} >Logout</button>
      </div>
      
      
    </div>
  )
}

export default Navbar