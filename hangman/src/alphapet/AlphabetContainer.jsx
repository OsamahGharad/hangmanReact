import React from 'react';
import Alphapet from './Alphapet';
import './alpha.css';

function AlphabetContainer({onclick}) {
    let alpha = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ]

  return (
    <div className="letter">
     {alpha.map((ele) => {
        return  <Alphapet  key={ele} onclick={onclick} letter={ele} />
     })}
    </div>
  );
}

export default AlphabetContainer;