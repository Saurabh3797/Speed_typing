import React from "react";
import AccountCircle from "./AccountCircle";
import logo from "./pngtree-man-typing-on-keyboard-vector-illustration-png-image_2026046.jpg";

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload(); // Reloads the page
  };

  return (
    <div className="header">
      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="logo-img" />
        <span>TypeWizard</span>
      </div>
      <div className="user-icon">
        <AccountCircle />
      </div>
    </div>
  );
};

export default Header;
