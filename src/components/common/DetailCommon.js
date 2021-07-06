import React, { useEffect, useState } from 'react';
import ForyouTags from '../foryou/ForyouTags';
import { ForyouBtnDetail } from '../ForyouBtn';
import { MyDetailBtn } from '../MyBtn';
import MyHiDate from '../myHighlights/MyHiDate';
import MyhiHighlights from '../myHighlights/MyhiHighlights';
import MyTags from '../myHighlights/MyTags';
import LinkComponent from './LinkComponent';
import './DetailCommon.scss';
import { EditpenBtn, GobackBtn } from './Buttons';
import sliceSentence from '../../hook/sliceSentence';

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
  return (
    <div
      className="detail-common"
      style={{ marginBottom: `${foryou ? '120px' : '0'}` }}
    >
      {/* sticky */}
      <section className="detail-common__header">
        <div className="detail-common__header__left">
          <div className="back-btn">
            <GobackBtn />
          </div>
          <h3
            className="detail-title"
            style={{ opacity: `${scroll ? '1' : '0'}` }}
          >
            {title}
          </h3>
        </div>
        <div className="btnbox">
          {foryou ? <ForyouBtnDetail /> : <MyDetailBtn />}
        </div>
      </section>
      {/* Top */}
      <div className="detail-top__main-img__box">
        <img
          className="detail-top__main-img__box__img"
          src={siteImg}
          alt="site img"
        />
      </div>
      <div className="detail-top-container">
        {foryou && (
          <div className="detail-for-tagcontainer">
            <ForyouTags siteTags={siteTags} />
          </div>
        )}
        <div className="detail-top__title-box">
          <h2 className="detail-top__title">{sliceSentence(title, 60)}</h2>
          {myHi && <EditpenBtn />}
        </div>
        {myHi && <MyTags myTags={myTags} />}
        <div className="detail-top__link-line">
          <LinkComponent link={link} linkImg={linkImg} />
          {myHi && <MyHiDate date={date} />}
        </div>
      </div>
      {/* Content */}
      <div className="detail-content-container">
        {foryou && <MyhiHighlights my_highlight={liner_highlight} foryou />}
        {myHi &&
          (my_highlight.length ? (
            <MyhiHighlights
              my_highlight={myHi ? my_highlight : liner_highlight}
            />
          ) : (
            <div className="no-highlights">No Highlights</div>
          ))}
      </div>
      {/* view original */}
      <a
        href={`http://${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="view-original-btn"
      >
        <div className="view-original">View Original</div>
      </a>
      <div className="detail-description-items">
        {moreInfo.map((item) => (
          <div className="detail-description__item">
            <div className="description-content__title">{item[0]}</div>
            <p className="description-content__content">{item[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailCommon;
