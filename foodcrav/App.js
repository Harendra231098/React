import React from 'react';
import ReactDOM from 'react-dom/client';
import img from './src/logo.jpg'
/** 
 * 
 * Header
 *  -logo 
 *  -nav items
 * Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 * Footer
 *  -Copyright
 *  -links
 *  -Address
 *  -Contact
 * 
 * 
 */
const Header = () =>(
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
      </ul>
    </div>

  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);