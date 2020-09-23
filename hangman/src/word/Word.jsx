import React from 'react';
import './word.css';

function Word({letters,checkedletter}) {
    let keyValue = 1;

    const showCheckedLetters = () => {
        if(checkedletter.length>0){
            let arrayOfletters =letters.map(ele => {
                for(let j=0 ; j<checkedletter.length;j++){
                    if(ele ===checkedletter[j]){
                       return ele;
                    }
                }
                return "__";
            })
            
            
            return arrayOfletters.map( (ele) => <p key={++keyValue} className="word-letter">{ele}</p>)
        }else{
            return letters.map( () => <p key={++keyValue} className="word-letter">__</p>)
        }
    
 }
  return (
  <div className="word">
      {showCheckedLetters()}
  </div>
  );
}

export default Word;
