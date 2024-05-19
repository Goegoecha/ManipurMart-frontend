import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo-main.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu('home') }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu === 'home' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('foods') }}><Link style={{ textDecoration: 'none' }} to='/foods'>Foods</Link>{menu === 'foods' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('handloom') }}><Link style={{ textDecoration: 'none' }} to='/handloom'>Handloom</Link>{menu === 'handloom' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('handicraft') }}><Link style={{ textDecoration: 'none' }} to='/handicraft'>Handicraft</Link>{menu === 'handicraft' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/") }}>Logout</button>
          : <Link to='login'><button>Login</button></Link>}
        <Link to='cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      </div>
    </div>
  )
}

export default Navbar