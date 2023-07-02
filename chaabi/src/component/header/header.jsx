import React from 'react';
import './header.css';
import headerImage from '../../assets/header.png'; 

const Header = () => {
  return (
    <div className="header-container">
      <img src={headerImage} alt="Header" className="header-image" />
      <div className='heading'>
<div className='line1'>Hello, Puneet Dhiman</div>
<div className='line2'>Following is your Organization's Performance Summary</div>

      </div>
    </div>
  );
};

export default Header;
