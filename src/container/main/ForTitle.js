import React, { useEffect, useRef, useState } from 'react';
import './ForTitle.scss';
// eslint-disable-next-line no-unused-vars
import * as LottiePlayer from '@lottiefiles/lottie-player';
import { ExtendBtn, CollapseBtn } from '../../components/common/Buttons';
function ForTitle() {
  const languageRef = useRef(null);
  const infoRef = useRef(null);
  const [languageDropToggle, setLanguageDropToggle] = useState(false);
  const [scroll, setscroll] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    let lanDropdown = languageDropToggle || false;
    let infomodal = infoModal || false;
    if (lanDropdown) {
      document.addEventListener('mousedown', onLangDropClose, false);
    }
    if (infomodal) {
      document.addEventListener('mousedown', onInfoModalClose, false);
    }
    return () => {
      document.removeEventListener('mousedown', onLangDropClose, false);
      document.removeEventListener('mousedown', onInfoModalClose, false);
    };
  }, [languageDropToggle, infoModal]);
  const lang = ['English', '한국어', '简体字', '繁體字', '日本語', 'Others'];
  const [checked, setchecked] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const onLanguageCheck = (e) => {
    const id = e.target.id;
    let new_lan_check = checked.map((v, i) => (i === id * 1 ? !v : v));
    setchecked(new_lan_check);
  };
  const onLangDropToggle = () => {
    setLanguageDropToggle(!languageDropToggle);
    // setLanguageDropToggle(true);
  };
  const onLangDropClose = (e) => {
    if (!languageRef.current.contains(e.target)) {
      setLanguageDropToggle(false);
    }
  };
  const onInfoModalOpen = () => {
    setInfoModal(true);
  };
  const onInfoModalClose = (e) => {
    if (e.target === e.currentTarget) {
      setInfoModal(false);
    }
    if (!infoRef.current.contains(e.target)) {
      setInfoModal(false);
    }
  };
  const changeNav = () => {
    if (window.scrollY >= 76) {
      setscroll(true);
      setInfoModal(false);
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
            <button className="info-btn" onClick={onInfoModalOpen}></button>
          )}
        </h1>
        {/* info modal */}
        {infoModal && (
          <div className="info-modal" ref={infoRef}>
            <div className="motal-triangle"></div>
            <div className="motal-inner">
              <button className="close-btn" onClick={onInfoModalClose}></button>
              <div className="lottie-container">
                <lottie-player
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets5.lottiefiles.com/packages/lf20_sbxsupzk.json"
                  style={{ width: '320px' }}
                ></lottie-player>
              </div>
              <div className="motal-description">
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
          ref={languageRef}
        >
          <button className="language-btn" onClick={onLangDropToggle}>
            Languages
            {!languageDropToggle && <ExtendBtn />}
            {languageDropToggle && <CollapseBtn />}
          </button>
          {languageDropToggle && (
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
