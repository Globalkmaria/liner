import React from 'react';
import './LinkComponent.scss';
function LinkComponent({ linkImg, link }) {
  return (
    <div className="linkline-container">
      <img src={linkImg} alt="link" className="linkline-container__img" />
      <div className="linkline-container__source">
        <a
          href={`http://${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="linkline-container__link"
        >
          {link}
        </a>
      </div>
    </div>
  );
}

export default LinkComponent;
