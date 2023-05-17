import React from 'react'
import img from '../img/avatarpng.png'
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='say something...' />
      <div className="send">
        <img src={img} alt="" />
        <input type="file" style={{display: 'none'}} id='file'/>
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
<button>Send</button>
      </div>
    </div>
  )
}

export default Input