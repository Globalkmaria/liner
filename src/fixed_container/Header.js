import React, { useState } from 'react';
import './Header.scss';
import Logo from '../assets/svg/liner-logo.svg';

function Header() {
  const [inputActive, setInputActive] = useState(false);
  const onInputToggle = () => {
    setInputActive(!inputActive);
  };
  return (
    <header className="header">
      <div className="header-container">
        <a href="/home" className="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="search-container">
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Search on LINER"
              onFocus={onInputToggle}
              onBlur={onInputToggle}
            />
            <span className="search-button"></span>
          </div>
          {inputActive && (
            <>
              <div className="search-acitve-dropbox">
                <div className="dropbox-inner">
                  <span>
                    Search for keywords, pages, and highlights on LINER
                  </span>
                </div>
              </div>
              <div className="search-acitve-shadow"></div>
            </>
          )}
        </div>
        <div className="header-right">
          <button className="upgrade">Upgrade</button>
          <button className="noti_bell"></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
