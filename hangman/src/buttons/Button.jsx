import React from 'react';
import './button.css';

function para({text ,oncliclk}) {
  return (
  <button className="btn-1" onClick={oncliclk}>{text}</button>
  );
}

export default para;
