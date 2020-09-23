import React from 'react';
import './image.css';

function Image({image}) {
  

  return (
      <div className="image-cont">
          <img className="image" src={image? image : "0.png"} alt="hangman" />
      </div>
    
  );
}

export default Image;