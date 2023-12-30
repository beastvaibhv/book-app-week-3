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
            <div> <img src={logo} alt="logo"  /> </div>
            <div> <img src={logoName} alt="logoName" /></div>

        </div>
        <div className='search-container'>
            <div className="input-box">
               <img src={search} alt="search-icon" />
                <input 
                type="text"
                placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
                 />
            </div>
            <div>
                <button className='search-btn'>Search</button>
            </div>
        </div>
        <div className="navbar-container"> 
        <div className='icons'>
          <div><img src={bookHeart} alt="book-heart-icon" /></div>
          <div><img src={bell} alt="bell-icon" /></div>
          <div><img src={diamond} alt="diamond" /></div>
          <div><img src={profile} alt="profile" /></div>

        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar;
