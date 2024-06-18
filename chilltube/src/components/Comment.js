import React from 'react'

export const Comment = ({data}) => {
    const {name,text,replies} = data;
  return (
    <div className='flex shadow-sm my-2'>
        <img className="h-6 m-2" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        <div className=''>
            <p className='font-bold'>{name}</p>
            <p className=''>{text}</p>
        </div>
    </div>
  )
}
