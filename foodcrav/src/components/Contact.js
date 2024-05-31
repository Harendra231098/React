//rafce
import React from 'react'

const Contact = () => {
  return (
    <div>
    <h1 className='font-bold text-3xl p-4 m-4'>Contact</h1>
    <form>
      <input className='border border-black p-2 m-2 shadow-lg'
       type='text' placeholder='name'  />
      <input className='border border-black p-2 m-2 shadow-lg'
       type='text' placeholder='message'/>
      <button className='border bg-gray-200 shadow-lg border-black p-2 m-2 hover:bg-black hover:text-white'>Submit</button>
    </form>
    </div>
    
  );
}

export default Contact; 