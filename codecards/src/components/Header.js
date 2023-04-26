import React from 'react';


const Header = () => {

  return (
    <header className="header">
      <img className="logo" src={require("../assets/logoFinal.png")} alt=""/>
      <h1>Code &lt;Cards&gt;</h1>
      
      <p>
        Download
      </p>
      <p>
        FAQ/Support
      </p>
      <img className="profile-icon" src={require("../assets/profile_white.png")} alt=""/>
    </header>
  )
}

export default Header;