import React from 'react';
import logo from "../utils/assets/logo.svg";
import logoName from "../utils/assets/logoName.svg";
import bell from "../utils/assets/bell.svg";
import diamond from "../utils/assets/diamond.svg";
import bookHeart from "../utils/assets/book-heart.svg";
import profile from "../utils/assets/profile.svg";
import search from "../utils/assets/search.svg";


const Navbar = () => {
  return (
    <div>
        <div className='main-navbar'>
      <div className="header-element">
        <div className="logo">
            <div> <img src={logo} alt="logo" className='icons' /> </div>
            <div> <img src={logoName} alt="logoName" className='icons'/></div>

        </div>
        <div className='search-container'>
            <div className="input-box">
               <img src={search} alt="search-icon" />
                <input type="text" />
            </div>
            <div>
                <button>Search</button>
            </div>
        </div>
        <div className="navbar-container"> 
        <div className='icons'>
          <span><img src={bookHeart} alt="book-heart-icon" /></span>
          <span><img src={bell} alt="bell-icon" /></span>
          <span><img src={diamond} alt="diamond" /></span>
          <span><img src={profile} alt="profile" /></span>

        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar;
