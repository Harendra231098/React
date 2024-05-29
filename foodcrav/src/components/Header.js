import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../../public/logo.jpg'
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () =>{
  const [btnName,setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();

  //if no depedency array => useEffect is called on every render
  //if dependency array is empty = [] =>useEffect is called on initial render(jusct once)
  //if depedency array is [btnName] => useEffect is called every time btnName is updated
  //dont use anchor tags for routing in React because it loads whole page when click on the link
  useEffect(()=>{
    console.log('useEffectcalled');
  },[]);

    return(
      <div className="header">
        <div className="logo-container">
        <img className="logo" src={img} alt="food"/>
      </div>
      <div className="navbar">
        <ul>
          <li>Online Status : { onlineStatus? <span>🟢</span> : <span>🔴</span> } </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button onClick={()=>{btnName==='Login'?setBtnName('Logout'):setBtnName('Login')}}>{btnName}</button>
        </ul>
      </div>
  
    </div>
    );
}

export default Header;
  