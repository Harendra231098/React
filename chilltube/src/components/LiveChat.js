import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';
import { generateRandomMessage } from '../utils/helper';

const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessages= useSelector(store=>store.chat.messages);
  const [liveMessage,setLiveMessage] = useState('');
 // console.log(chatMessages);

useEffect(()=>{

   const i= setInterval(()=>{
    dispatch(addMessage({
      name : generateRandomName(),
      message : generateRandomMessage(),
    }))
  },2000);
   

   return () => clearInterval(i);
},[])

  return (
    <>
    <div className='w-full h-[460px] mx-4 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((c,index)=><ChatMessage key={index} name={c.name} message={c.message}  />)}
    </div>
    <form className='w-full p-2 ml-2' 
    onSubmit={(e)=>{
      e.preventDefault();
      console.log(liveMessage)
      dispatch(addMessage({
        name:'Hari',
        message:liveMessage,
      }))
      setLiveMessage('');
    }}>
      <input className="w-[23rem] px-2 border border-black" type='text' value={liveMessage} onChange={e=>setLiveMessage(e.target.value)}/> 
      <button className='px-2 mx-2 bg-green-100'>Send</button>   
    </form>  
    </>
  )
}

export default LiveChat