import img from '../../public/logo.jpg'
const Header = () =>{
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
        </ul>
      </div>
  
    </div>
    );
}

export default Header;
  