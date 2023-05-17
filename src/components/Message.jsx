import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://avatarfiles.alphacoders.com/344/thumb-344646.png" alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>this is something nice!</p>
        <img src="https://avatarfiles.alphacoders.com/344/thumb-344646.png" alt="" />
      </div>
    </div>
  )
}

export default Message