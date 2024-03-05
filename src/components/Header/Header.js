import React, {useContext} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
// import SearchIcon from '@material-ui/icons/Search'
// import SearchIcon from '@mui/icons-material/Search';
// import "bootstrap/dist/css/bootstrap.min.css"
import { GoSearch } from "react-icons/go";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {AiOutlineShoppingCart} from "react-icons/ai";
// import { useStateValue } from '../ReactContextApi/StateProvider';
import { Basket } from '../../App';

function Header(){
const basket=useContext(Basket);
// const cart=useContext(Cart);
// const [{basket}, dispatch]= useStateValue();

  return (
    <nav className='header'>

      <Link to="/">
      <img className='logo-navbar' src="https://cutewallpaper.org/24/amazon-logo-png-transparent/amazon-91770-logo-1c662-png-41c0b-images-07b9e-free-1f572-download.png" alt="logo here" />
      </Link>

        <div className='search'>
          <input className='header-search'></input>
          <GoSearch className='header-icon'/>
        </div>

        
      <div className="header_nav">

      <Link to="/login" className="header_link">
        <div className="header_option">
          <span className="header_one">Hello,</span>
          <span className="header_two">Sign In</span>
        </div>
      </Link>

      <Link to="/" className="header_link">
        <div className="header_option">
          <span className="header_one">Returns</span>
          <span className="header_two">& Orders</span>
        </div>
      </Link>

      <Link to="/checkout" className="header_link">
        <div className="header_basket">
          <ShoppingBasketIcon />
          {/* <AiOutlineShoppingCart className="basketIcon" size={20}/> */}
          <span className="header_two header_count">{basket.cart.length}</span>
        </div>
      </Link>

      </div>
     
     
    </nav>
  )

}

export default Header