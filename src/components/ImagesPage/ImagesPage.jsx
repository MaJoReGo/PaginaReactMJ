import React from 'react';
import logoTwo from '../../assets/helloKitty.jpg';
import logo1 from '../../assets/Ca.webp';
import logo2 from '../../assets/Ci.webp';
import logo3 from '../../assets/Mu.webp';
import './ImagesPage.css';

export const ImagesPage = () => (
  <div className="imagesPageTwoContainer">
    <img className="imagesPageTwo" src={logoTwo} alt="ImagesPage" />
    <div className="imagesPagesContainer">
      <img className="imagesPage1" src={logo1} alt="ImagesPage" />
      <img className="imagesPage2" src={logo2} alt="ImagesPage" />
      <img className="imagesPage3" src={logo3} alt="ImagesPage" />
    </div>
  </div>
);

