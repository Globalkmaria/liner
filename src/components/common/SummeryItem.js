import React from 'react';
import { Link } from 'react-router-dom';
import sliceSentence from '../../hook/sliceSentence';
import ForyouBtn from '../ForyouBtn';
import './SummeryItem.scss';
import { BsCheck } from 'react-icons/bs';
import MyBtn from '../MyBtn';
function SummeryItem({ item, foryou, myHi }) {
  const highlight_color = {
    yellow: 'rgb(255, 255, 131)',
    blue: 'rgb(166, 255, 233)',
  };
  const {
    title,
    siteTags,
    liner_highlight,
    my_highlight,
    myTags,
    siteImg,
    linkImg,
    link,
    date,
  } = item;

  return (
    <div className="summeryitem-container">
      {/*siteTage - foryou (option) */}
      {foryou && !!siteTags.length && (
        <div className="summeryitem-siteTags">
          <ul>
            {siteTags.map((sTag, i) => (
              <li className="siteTag" key={i}>
                #{sTag}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* summary Main */}
      <div
        className={`summeryitem-main ${myHi ? 'myHi-summeryitem-main' : ''}`}
      >
        {/* myHi hover check */}
        {myHi && (
          <div className="myHi-hover-check">
            <BsCheck />
          </div>
        )}
        <div className="summeryitem-main-contents">
          {/* title */}
          <Link to="/">
            <h2 className="contents-title">{title}</h2>
          </Link>
          {/*foryou -> description || myhigh -> highlight */}
          <div
            className={`contents-highlight ${
              foryou ? 'contents-highlight-foryou' : 'contents-highlight-myHi'
            }`}
          >
            {foryou && liner_highlight && (
              <p>{sliceSentence(liner_highlight, 275)}</p>
            )}
            {myHi &&
              my_highlight &&
              (my_highlight.length ? (
                my_highlight.map((highlight) => (
                  <div className="highlight__container my-highlight__container">
                    <div
                      className="highlight-border"
                      style={{
                        borderColor: `${highlight_color[highlight[0]]}`,
                      }}
                    ></div>
                    <p className="hightlight-content">
                      {sliceSentence(highlight[1], 240)}
                    </p>
                  </div>
                ))
              ) : (
                <div className="my_highlight-nohightlight"></div>
              ))}
          </div>
        </div>
        {/* summary img */}
        {siteImg && (
          <div className="summeryitem-main-imgContainer">
            <img className="main-imgContainer-img" src={siteImg} alt="site" />
          </div>
        )}
      </div>
      {/* summary bottom */}
      {/* mytags- myHighlights (option) */}
      {myHi && (
        <div className="mytags-container">
          <span className="tag-icon"></span>
          {myTags.length ? (
            <ul className="mytags-contant">
              {myTags.map((mytag) => (
                <li className="mytags-li">{mytag}</li>
              ))}
            </ul>
          ) : (
            ''
          )}
          <button className="editTag">Edit Tag</button>
        </div>
      )}
      <div className="summary-bottom">
        <div className="summary-bottom-container">
          <div
            className={`summary-bottom__left ${
              myHi ? 'myHi-summary-bottom__left' : ''
            } `}
          >
            {/* link & date */}
            <div className="linkline-container">
              <img
                src={linkImg}
                alt="link"
                className="linkline-containe__img"
              />
              <div className="linkline-container__source">
                <a href={link} className="linkline-container__source__a">
                  {link}
                </a>
              </div>
            </div>
            {/* myHighlights (option) */}
            {myHi && date && (
              <div className="date">
                <div className="vertical-line"></div>
                {date}
              </div>
            )}
          </div>
          {/* summary button */}
          <div className="summary-bottom__right">
            {foryou && (
              <div className="foryou-btn summary-bottom__right-btn">
                <ForyouBtn link={link} />
              </div>
            )}
            {myHi && (
              <div className="myHigh-btn summary-bottom__right-btn">
                <MyBtn />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border-seperator"></div>
    </div>
  );
}

export default SummeryItem;
