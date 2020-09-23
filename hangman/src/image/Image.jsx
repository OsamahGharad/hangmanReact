import React from 'react';
import './image.css';
import Image0 from './0.png';
import Image1 from './1.png';
import Image2 from './2.png';
import Image3 from './3.png';
import Image4 from './4.png';
import Image5 from './5.png';
import Image6 from './6.png';
import Image7 from './7.png';
import Image8 from './8.png';
import Image9 from './9.png';
import Image10 from './10.png';


function Image({mistake}) {
  
    let switchImage = ( mistake) => {
    switch(mistake){
        case 1 :
        return <img className="image" src={Image1} alt="hangman" />
        case 2 :
            return <img className="image" src={Image2} alt="hangman" />
        case 3 :
            return <img className="image" src={Image3} alt="hangman" />
        case 4 :
            return <img className="image" src={Image4} alt="hangman" />
        case 5 :
            return <img className="image" src={Image5} alt="hangman" />
        case 6 :
            return <img className="image" src={Image6} alt="hangman" />
        case 7 :
            return <img className="image" src={Image7} alt="hangman" />
        case 8 :
            return <img className="image" src={Image8} alt="hangman" />
        case 9 :
            return <img className="image" src={Image9} alt="hangman" />
        case 10 :
            return <img className="image" src={Image10} alt="hangman" />
        default :
        return <img className="image" src={Image0} alt="hangman" />
    }
   }
  return (
      <div className="image-cont">
          {switchImage(mistake)}
      </div>
    
  );
}

export default Image;