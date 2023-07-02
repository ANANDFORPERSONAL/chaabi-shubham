import React from 'react';
import './sidebar.css';
import topImage from '../../assets/Logo.png'
import customIcon1 from '../../assets/icon1.png';
import customIcon2 from '../../assets/icon2.png';
import customIcon3 from '../../assets/icon3.png';
import customIcon4 from '../../assets/icon4.png';

const SideBar = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-item">         
        <img src={customIcon1} alt="Custom Icon" className="sidebar-icon" />
                Dashboard
        </div>
        <div className="sidebar-item">        
        <img src={customIcon2} alt="Custom Icon" className="sidebar-icon" />
            Trainings</div>
        <div className="sidebar-item">        
        <img src={customIcon3} alt="Custom Icon" className="sidebar-icon" />
            Users</div>
        <div className="sidebar-item">        
        <img src={customIcon4} alt="Custom Icon" className="sidebar-icon" />
            Analytics</div>
        <div className="sidebar-item">        
        <img src={customIcon4} alt="Custom Icon" className="sidebar-icon" />
            My Account</div>
        <div className="sidebar-item">        
        <img src={customIcon4} alt="Custom Icon" className="sidebar-icon" />
            Support</div>
      </div>
      <img src={topImage} alt="logo" className="top-image" />
    </div>
  );
};

export default SideBar;
