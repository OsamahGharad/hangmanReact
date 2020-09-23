import React from 'react';
import './alpha.css';

function Alphapet({letter}) {
  

  return (
    <button className="btn" onClick={() => console.log("saleem")}>{letter}</button>
  );
}

export default Alphapet;