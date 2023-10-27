import React, { useEffect, useState } from 'react';
import './App.css';
import { gsap } from "gsap";

function App() {

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  }

  return (
    <div className="app flex-row">
      <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
       <p>Hover Me</p> 
      </div>
    </div>
  );
}

export default App;
