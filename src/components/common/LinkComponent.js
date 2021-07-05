import React from 'react';
import './LinkComponent.scss';
function LinkComponent({ linkImg, link }) {
  return (
    <div className="linkline-container">
      <img src={linkImg} alt="link" className="linkline-containe__img" />
      <div className="linkline-container__source">
        <a href={link} className="linkline-container__source__a">
          {link}
        </a>
      </div>
    </div>
  );
}

export default LinkComponent;
