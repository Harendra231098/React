import { useState } from 'react';
import img from '../../public/logo.jpg'
const Header = () =>{
  const [btnName,setBtnName] = useState('Login');
    return(
      <div className="header">
        <div className="logo-container">
        <img className="logo" src={img} alt="food"/>
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={()=>{btnName==='Login'?setBtnName('Logout'):setBtnName('Login')}}>{btnName}</button>
        </ul>
      </div>
  
    </div>
    );
}

export default Header;
  