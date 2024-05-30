import { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../public/logo.jpg'
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
const Header = () =>{
  const [btnName,setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const user = useContext(UserContext);
 console.log(user);

  //if no depedency array => useEffect is called on every render
  //if dependency array is empty = [] =>useEffect is called on initial render(jusct once)
  //if depedency array is [btnName] => useEffect is called every time btnName is updated
  //dont use anchor tags for routing in React because it loads whole page when click on the link
  useEffect(()=>{
    console.log('useEffectcalled');
  },[]);

    return(
      <div className="flex justify-between border shadow-lg" >
        <div className="logo-container">
        <img className="w-56" src={img} alt="food"/>
      </div>
      <div className="navbar">
        <ul className='flex p-10 space-x-6 list-none' >
          <li>Online Status : { onlineStatus? <span>🟢</span> : <span>🔴</span> } </li>
          <li>
            <Link className='no-underline' to="/">Home</Link>
          </li>
          <li>
            <Link className='no-underline' to="/about">About Us</Link>
          </li>
          <li>
            <Link className='no-underline' to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link className='no-underline' to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button onClick={()=>{btnName==='Login'?setBtnName('Logout'):setBtnName('Login')}}>{btnName}</button>
          <li>{user.loggedInUser}</li>
        </ul>
       
      </div>
  
    </div>
    );
}

export default Header;
  