import React ,{useState}from 'react';
import './alpha.css';

function Alphapet({letter ,onclick}) {
  let[checkvalue ,setCheck]=useState(false)

  return (
    <button disabled={checkvalue} className="btn" onClick={() =>{
      setCheck(true)
      onclick(letter)
    } }>{letter}</button>
  );
}

export default Alphapet;