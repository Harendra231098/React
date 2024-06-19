import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
    const [text,setText] = useState("");
   // const prime = !text.length ? 'Enter the value' : findPrime(+text);
   const prime = useMemo(()=>findPrime(+text),[text]) ;

    const [isDark,setIsDark] = useState(false);
  return (
    
    <div className={'m-4 p-2 w-96 border border-black '+ (isDark && 'bg-gray-900 text-white')}>
        <div>
            <button className='m-10 p-2 bg-green-300' onClick={()=>setIsDark(!isDark)}>Toggle</button>
        </div>
        <input className={"border border-black w-72 px-2 "+(isDark && 'text-black')} type='text' value={text} onChange={(e)=>{setText(e.target.value)}}/>

        <div>
            <h1>nth Prime: {!text.length ? 'Enter the value' : prime}</h1>
       </div>
    </div>
    
   
  )
}

export default Demo