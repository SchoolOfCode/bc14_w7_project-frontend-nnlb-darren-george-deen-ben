import React from 'react';


const Header = () => {

  return (
    <header className="header">
      <h1>Code &lt;Cards&gt;</h1>
      <img className="logo" src={require("../assets/logoIdea2.png")} alt=""/>
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