import React, { useState } from 'react';
import './Navbar.css';

const SocialDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="social-dropdown">
      <button className="button-style">Socials</button>
        <div className="social-dropdown-menu">
          <a href="https://www.instagram.com/codenetwork_/" target="_blank">Instagram</a>
          <a href="https://discord.gg/scXBk2j4uE" target="_blank">Discord</a>
          <a href="https://www.facebook.com/CodeNetwork" target="_blank">Facebook</a>
          <a href="https://www.linkedin.com/company/codenetwork/" target="_blank">LinkedIn</a>
        </div>
    </div>
  );
};

export default SocialDropdown;
