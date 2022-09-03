import React from "react";
import logo from './RizidentMeme.png';
export default  function TopBar() {
 return (<div> 
     <img src={logo} className="App-logo" alt="logo"></img>
  <a
        className="App-link"
        href="/"
        rel="noopener noreferrer"
      >
        Start
      </a>
      <a
                className="App-link"
                href="/info"
                rel="noopener noreferrer"
              >
                Informacion 
              </a>

  
        </div>) 
          
}    