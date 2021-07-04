import React, { useEffect, useState } from 'react';
import './ForTitle.scss';
// eslint-disable-next-line no-unused-vars
import * as LottiePlayer from '@lottiefiles/lottie-player';
function ForTitle() {
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const lang = ['English', '한국어', '简体字', '繁體字', '日本語', 'Others'];
  const [checked, setchecked] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [languageDropToggle, setLanguageDropToggle] = useState(true);
  const onLanguageCheck = (e) => {
    const id = e.target.id;
    let new_lan_check = checked.map((v, i) => (i === id * 1 ? !v : v));
    setchecked(new_lan_check);
  };
  const onLangDorpToggle = () => {
    console.log(languageDropToggle);
    setLanguageDropToggle(!languageDropToggle);
  };
  const [infoModal, setInfoModal] = useState(false);
  const onInfoModalToggle = () => {
    setInfoModal(!infoModal);
  };
  const [scroll, setscroll] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 76) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  return (
    <>
      <div className="for-title">
        {/* <div className="for-title-main"> */}
        {/* title */}
        <h1 style={scroll ? { fontSize: '16px' } : { color: '32px' }}>
          For You
          {!scroll && (
            <button className="info-btn" onClick={onInfoModalToggle}></button>
          )}
        </h1>
        {/* info modal */}
        {infoModal && (
          <div className="info-modal-container">
            <div className="motal-triangle"></div>
            <div className="motal-inner">
              <button
                className="close-btn"
                onClick={onInfoModalToggle}
              ></button>
              <div className="lottie-container">
                <lottie-player
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets5.lottiefiles.com/packages/lf20_sbxsupzk.json"
                  style={{ width: '320px' }}
                ></lottie-player>
              </div>
              <div className="motal-inner-description">
                <h4>For You</h4>
                <p>
                  We recommend you pages you'll love and need. The more you
                  highlight, the smarter our algorithm gets.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* language */}
        <div
          className="language-container"
          style={scroll ? { alignItems: 'center' } : { color: 'flex-end' }}
        >
          <button className="language-btn" onClick={onLangDorpToggle}>
            Languages
            {languageDropToggle && <div className="expand"></div>}
            {!languageDropToggle && <div className="collapse"></div>}
          </button>
          {!languageDropToggle && (
            <ul className="language-dropbox">
              <span className="lan-ul">Select for feed</span>
              {lang.map((lan, i) => (
                <li
                  className="lang-li"
                  key={i}
                  id={i}
                  onClick={(e) => onLanguageCheck(e)}
                >
                  <span className={`${checked[i] && 'lan-span-check'}`}>
                    {lan}
                  </span>
                  {checked[i] && <div className="check"></div>}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* </div> */}
      </div>
      <span className="for-title-description">
        Picked by LINER, just for you
      </span>
    </>
  );
}

export default ForTitle;
