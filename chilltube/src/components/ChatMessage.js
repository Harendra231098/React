import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm'>
        <img className="h-6 m-1" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        <span className='font-bold pr-2'>{name}</span>
        <span>{message}</span>  
    </div>
  )
}

export default ChatMessage  