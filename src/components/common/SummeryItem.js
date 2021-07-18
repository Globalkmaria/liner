import React from 'react';
import { Link } from 'react-router-dom';
import sliceSentence from '../../hook/sliceSentence';
import ForyouBtn from '../ForyouBtn';
import './SummeryItem.scss';
import { BsCheck } from 'react-icons/bs';
import MyBtn from '../MyBtn';
import ForyouTags from '../foryou/ForyouTags';
import MyHiDate from '../myHighlights/MyHiDate';
import LinkComponent from './LinkComponent';
import MyTags from '../myHighlights/MyTags';
import Highlights from './Highlights';
function SummeryItem({ item, foryou, myHi, morelike }) {
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
    <div className="summeryitem">
      {/*siteTage - foryou (option) */}
      {foryou && !!siteTags.length && <ForyouTags siteTags={siteTags} />}
      {/* summary Main */}
      <div
        className={`summeryitem__main ${myHi ? 'summeryitem__main--myhi' : ''}`}
      >
        {/* myHi hover check */}
        {myHi && (
          <div className="hover-check--myhi">
            <BsCheck />
          </div>
        )}
        <div className="summeryitem-content">
          {/* title Link */}
          <Link
            to={
              foryou
                ? morelike
                  ? `/home/relevant/${id}`
                  : `/home/pages/${id}`
                : `/myhighlight/${id}`
            }
          >
            <h2 className="summeryitem-content__title">{title}</h2>
          </Link>
          {/* MainContent */}
          {/*foryou -> description || myhigh -> highlight */}
          <div
            className={`summeryitem-content__highlight ${
              foryou
                ? 'summeryitem-content__highlight--foryou'
                : 'summeryitem-content__highlight--myHi'
            }`}
          >
            {foryou && liner_highlight && (
              <p>{sliceSentence(liner_highlight[0][1], 275)}</p>
            )}
            {myHi && <Highlights highlights={my_highlight} />}
          </div>
        </div>
        {/* summary img */}
        {siteImg && (
          <div className="summeryitem__img-box">
            <img className="summeryitem__img" src={siteImg} alt="site" />
          </div>
        )}
      </div>
      {/* summary bottom */}
      {/* mytags- myHighlights (option) */}
      {myHi && <MyTags myTags={myTags} />}
      <div className="summeryitem__footer">
        <div className="summaryitem__footer-container">
          <div
            className={`summaryitem__linkbox ${
              myHi ? 'summaryitem__linkbox-myhi' : ''
            } `}
          >
            {/* link  */}
            <LinkComponent linkImg={linkImg} link={link} />
            {/* myHighlights (option) date */}
            {myHi && <MyHiDate date={date} />}
          </div>
          {/* summary button */}
          <div className="summaryitem__btn-box">
            {foryou && (
              <div className="summaryitem__btn--foryou summaryitem__btn">
                <ForyouBtn link={link} />
              </div>
            )}
            {myHi && (
              <div className="summaryitem__btn--myHigh summaryitem__btn">
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
