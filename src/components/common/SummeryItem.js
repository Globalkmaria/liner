import React from 'react';
import { Link } from 'react-router-dom';
import sliceSentence from '../../hook/sliceSentence';
import ForyouBtn from '../ForyouBtn';
import './SummeryItem.scss';
import { BsCheck } from 'react-icons/bs';
import MyBtn from '../MyBtn';
import ForyouTags from '../foryou/ForyouTags';
import MyhiHighlights from '../myHighlights/MyhiHighlights';
import MyHiDate from '../myHighlights/MyHiDate';
import LinkComponent from './LinkComponent';
import MyTags from '../myHighlights/MyTags';
function SummeryItem({ item, foryou, myHi }) {
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
    id,
  } = item;

  return (
    <div className="summeryitem-container">
      {/*siteTage - foryou (option) */}
      {foryou && !!siteTags.length && <ForyouTags siteTags={siteTags} />}
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
          {/* title Link */}
          <Link to={foryou ? `/home/pages/${id}` : `/myhighlight/${id}`}>
            <h2 className="contents-title">{title}</h2>
          </Link>
          {/* MainContent */}
          {/*foryou -> description || myhigh -> highlight */}
          <div
            className={`contents-highlight ${
              foryou ? 'contents-highlight-foryou' : 'contents-highlight-myHi'
            }`}
          >
            {foryou && liner_highlight && (
              <p>{sliceSentence(liner_highlight, 275)}</p>
            )}
            {myHi && <MyhiHighlights my_highlight={my_highlight} />}
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
      {myHi && <MyTags myTags={myTags} />}
      <div className="summary-bottom">
        <div className="summary-bottom-container">
          <div
            className={`summary-bottom__left ${
              myHi ? 'myHi-summary-bottom__left' : ''
            } `}
          >
            {/* link  */}
            <LinkComponent linkImg={linkImg} link={link} />
            {/* myHighlights (option) date */}
            {myHi && <MyHiDate date={date} />}
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
