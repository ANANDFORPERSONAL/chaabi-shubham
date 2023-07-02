import React from 'react';
import './content.css';
import image1 from '../../assets/frame1.png';
import image2 from '../../assets/frame2.png';
import image3 from '../../assets/frame3.png';
import image4 from '../../assets/frame4.png';
import image5 from '../../assets/frame5.png';
import image6 from '../../assets/frame6.png';
import image7 from '../../assets/frame7.png';
import image8 from '../../assets/frame8.png';
import image9 from '../../assets/frame9.png';
import image91 from '../../assets/frame91.png';


const Content = () => {
  return (
    <div className="content-container">
      <div className="image-row">
        <img src={image1} alt="" className="image1" />
        <img src={image2} alt="" className="image2" />
        <img src={image3} alt="" className="image3" />
        <img src={image4} alt="" className="image4" />
      </div>
      <div className="image-row2">
      <img src={image5} alt="" className="image5" />
      <img src={image6} alt="" className="image6" />

      </div>
      <div className="image-row3">
      <img src={image7} alt="" className="image7" />
      <img src={image8} alt="" className="image8" />
      <img src={image9} alt="" className="image9" />
      </div>
      <div className="image-row4">
      <img src={image91} alt="" className="image9" />

      </div>
    </div>
  );
};

export default Content;
