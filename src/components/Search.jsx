import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
<input type="text" placeholder='Find someone' />
      </div>
      <div className="userChat">
        <img src="https://avatarfiles.alphacoders.com/344/thumb-344373.jpg" alt="" />
        <div className="userChatInfo">
          <span>Piyush</span>
        </div>
      </div>
    </div>
  )
}

export default Search