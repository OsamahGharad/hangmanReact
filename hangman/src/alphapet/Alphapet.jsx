import React from 'react';
import './alpha.css';

function Alphapet({letter ,onclick}) {

  return (
    <button  className="btn" onClick={() =>{
      
      onclick(letter)
    } }>{letter}</button>
  );
}

export default Alphapet;