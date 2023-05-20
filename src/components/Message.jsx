import React, { useContext, useEffect, useRef } from 'react'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'

const Message = ({message}) => {

  // console.log(message)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

const ref = useRef()

useEffect(() => {
ref.current?.scrollIntoView({behavior: 'smooth'})
 
}, [message])

  return (
    <div ref={ref} 
    className={`message ${message.senderId === currentUser.uid && 'owner'}`}>
      <div className="messageInfo">
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL ? currentUser.photoURL : 'https://avatarfiles.alphacoders.com/211/thumb-211248.jpg' : data.user.photoURL} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message