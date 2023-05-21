import React, { useContext, useEffect, useRef } from 'react'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'
import { Timestamp } from 'firebase/firestore'

import moment from 'moment'
const Message = ({message}) => {

  // console.log(message)




  
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

const ref = useRef()

useEffect(() => {
ref.current?.scrollIntoView({behavior: 'smooth'})
 
}, [message])

const date = message.date.toDate()
const date_now = moment(date).fromNow()
const Hour = date.getHours();
const Minute = date.getMinutes();
// const date1 = date.toLocaleTimeString('')
console.log(`${Hour}:${Minute}`)

  return (
    <div ref={ref} 
    className={`message ${message.senderId === currentUser.uid && 'owner'}`}>
      <div className="messageInfo">
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL ? currentUser.photoURL : 'https://avatarfiles.alphacoders.com/211/thumb-211248.jpg' : data.user.photoURL} alt="" />
        <span>{`${Hour}:${Minute}`}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message