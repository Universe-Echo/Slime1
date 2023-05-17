import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Slime</span>
      <div className="user">
        <img src="https://avatarfiles.alphacoders.com/344/thumb-344373.jpg" alt="" />
        <span>EcHO</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar