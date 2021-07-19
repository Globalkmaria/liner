import React, { useEffect, useState } from 'react';
import ForyouTags from '../foryou/ForyouTags';
import { ForyouBtnDetail } from '../ForyouBtn';
import { MyDetailBtn } from '../MyBtn';
import MyHiDate from '../myHighlights/MyHiDate';
import MyTags from '../myHighlights/MyTags';
import LinkComponent from './LinkComponent';
import './DetailCommon.scss';
import { EditpenBtn, GobackBtn } from './Buttons';
import sliceSentence from '../../hook/sliceSentence';
import Highlights from './Highlights';

function DetailCommon({ item, myHi, foryou }) {
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const [scroll, setscroll] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 240) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  const {
    title,
    siteTags,
    myTags,
    date,
    link,
    linkImg,
    my_highlight,
    liner_highlight,
    moreInfo,
    siteImg,
  } = item;
  console.log(moreInfo);
  return (
    <>
      {/* sticky */}
      <div className="detail-header">
        <div className="detail-header__left">
          <div className="back-btn">
            <GobackBtn />
          </div>
          <h3
            className="detail-header__title"
            style={{ opacity: `${scroll ? '1' : '0'}` }}
          >
            {title}
          </h3>
        </div>
        <div className="btnbox">
          {foryou ? <ForyouBtnDetail link={link} /> : <MyDetailBtn />}
        </div>
      </div>
      <div
        className="detail-main"
        style={{ marginBottom: `${foryou ? '120px' : '0'}` }}
      >
        {/* Top */}
        <div className="detail-main__img-box">
          <img className="detail-main__img" src={siteImg} alt="site img" />
        </div>
        <div className="detail-info">
          {foryou && (
            <div className="detail-info__tags">
              <ForyouTags siteTags={siteTags} />
            </div>
          )}
          <div className="detail-info__title-box">
            <h2 className="detail-info__title">{sliceSentence(title, 60)}</h2>
            {myHi && <EditpenBtn />}
          </div>
          {myHi && <MyTags myTags={myTags} />}
          <div className="detail-info__link-box">
            <LinkComponent link={link} linkImg={linkImg} />
            {myHi && <MyHiDate date={date} />}
          </div>
        </div>
        {/* highlights */}
        <div className="detail-highlights">
          {foryou && <Highlights highlights={liner_highlight} foryou />}
          {myHi &&
            (my_highlight.length ? (
              <Highlights highlights={myHi ? my_highlight : liner_highlight} />
            ) : (
              <div className="highlights--no-highlights">No Highlights</div>
            ))}
        </div>
        {/* view original */}
        <a
          href={`http://${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="view-original"
        >
          <div className="view-original__title">View Original</div>
        </a>
        <div className="detail-description">
          {moreInfo.map((item) => (
            <div className="detail-description__item">
              <div className="detail-description__title">{item[0]}</div>
              <p className="detail-description__content">{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DetailCommon;
