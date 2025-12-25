import React from 'react'
import logo from "./logo2.PNG";
import "./Header.css";

const Header = () => {
  return (
    <div style={{alignContent:'center'}}>
      <header className="header">
      <img src={logo} alt="App Logo" className="header-logo" />
      <div className='headerText'>
      <h1 className="header-title">COMRADIC EMPOWERMENT UNION <br/> <p style={{textAlign:'center' ,margin:0}}>PILOT EXAM</p> </h1>
      <h1 className="header-title">தோழர் சேவை ஒன்றியம் <br/> <p style={{textAlign:'center' ,margin:0}}>முன்னோடி பரீட்சை</p> </h1>
      </div>
      

    </header>
    </div>
    
  );
};



export default Header