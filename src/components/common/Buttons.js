import { useEffect, useRef, useState } from 'react';
import './Buttons.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';

export function BtnWithDropdown({ button_name, button_img, lists }) {
  // list -> [list-name, list-src]
  const [openModal, setOpenModal] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    let open = openModal || false;
    if (open) {
      document.addEventListener('mousedown', onCloseModal, false);
    }
    return () => {
      document.removeEventListener('mousedown', onCloseModal, false);
    };
  }, [openModal]);
  const onOpenModal = () => {
    setOpenModal(!openModal);
  };
  const onCloseModal = (e) => {
    if (!containerRef.current.contains(e.target)) setOpenModal(false);
  };
  return (
    <div className="btn-with-dropdown__container" ref={containerRef}>
      <div
        id="name-hover"
        className="btn-hover-name__container dropdown-hover-name"
      >
        <span className="btn-hover-name__name">{button_name}</span>
      </div>
      <button className="btn dropdown-btn" onClick={onOpenModal}>
        <img src={button_img} alt={button_name} />
      </button>
      {openModal && (
        <ul className="btn-dropdown__container">
          {lists.map((list, i) => (
            <li className="btn-dropdown__li" key={i}>
              <span className="btn-dropdown__li__icon">
                <img src={list[1]} alt={list[0]} />
              </span>
              {list[0]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SaveBtn() {
  const [saved, setsaved] = useState(false);
  const onSave = () => {
    setsaved(!saved);
  };
  return (
    <>
      <div className="save-container">
        {saved ? (
          <>
            <button className="addTags">+ Add tags</button>
            <button className="save-btn--checked btn" onClick={onSave}></button>
          </>
        ) : (
          <>
            <div className="btn-hover-name__container dropdown-hover-name">
              <span className="btn-hover-name__name">Save</span>
            </div>
            <button className="save-btn btn" onClick={onSave}></button>
          </>
        )}
      </div>
    </>
  );
}

export function ShareBtn({ link }) {
  const [share, setShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const sns = [
    { name: 'facebook', img: '/assests/svg/facebook.svg' },
    { name: 'twitter', img: '/assests/svg/twitter.svg' },
    { name: 'linkdin', img: '/assests/svg/linkdin.svg' },
    { name: 'messenger', img: '/assests/svg/messenger.svg' },
    { name: 'line', img: '/assests/svg/line.svg' },
    { name: 'mail', img: '/assests/svg/mail.svg' },
  ];
  const onShare = () => {
    setShare(!share);
  };
  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const onClickOutsideContainer = (e) => {
    if (e.target !== e.currentTarget) return;
    setShare(false);
  };
  return (
    <>
      <div className="share-container">
        {share && (
          <div
            className="btn-modal__container share-modal-container "
            onClick={(e) => onClickOutsideContainer(e)}
          >
            <div className="btn-modal__content">
              <div className="btn-modal__titleline">
                <h3 className="btn-modal__titleline__title">
                  Share Original Page
                </h3>
                <button
                  className="btn-modal__titleline__close "
                  onClick={onShare}
                ></button>
              </div>
              <div className="sns-container">
                {sns.map((s, i) => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a className="sns-button" href="#" key={i}>
                    <img src={s.img} alt={s.name} />
                    <p>{s.name}</p>
                  </a>
                ))}
              </div>
              <div className="share-bottom">
                <span className="bottom-link" onClick={onCopy}>
                  {link + '/goodle-docs'}
                </span>
                <button
                  className="bottom-copy copy"
                  onClick={onCopy}
                  style={copied ? { opacity: '0' } : { opacity: '1' }}
                >
                  Copy
                </button>
                <span
                  className="bottom-copy copied"
                  style={copied ? { opacity: '1' } : { opacity: '0' }}
                >
                  Copied
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="btn-hover-name__container dropdown-hover-name">
          <span className="btn-hover-name__name">Share</span>
        </div>
        <button className="share-btn btn" onClick={onShare}></button>
      </div>
    </>
  );
}

export function MoreBtn() {
  const button_name = 'More';
  const button_img = '/assests/svg/more-light.svg';
  const lists = [
    ['More pages like this', '/assests/svg/like-dropdown.svg'],
    ['Fewer pages like this', '/assests/svg/dislike-dropdown.svg'],
    ['Hide this page', '/assests/svg/hide-dropdown.svg'],
  ];
  return (
    <BtnWithDropdown
      button_name={button_name}
      button_img={button_img}
      lists={lists}
    />
  );
}
export function MoreBtnNoHide() {
  const button_name = 'More';
  const button_img = '/assests/svg/more-light.svg';
  const lists = [
    ['More pages like this', '/assests/svg/like-dropdown.svg'],
    ['Fewer pages like this', '/assests/svg/dislike-dropdown.svg'],
  ];
  return (
    <BtnWithDropdown
      button_name={button_name}
      button_img={button_img}
      lists={lists}
    />
  );
}

export function ExtendBtn() {
  return <div className="expand"></div>;
}
export function CollapseBtn() {
  return <div className="collapse"></div>;
}

export function MyShare() {
  const lists = [
    [
      'Full text with highlights',
      'https://getliner.com/src/images/summary-dropdown.svg',
    ],
    [
      'Highlight summary',
      'https://getliner.com/src/images/fulltext-dropdown.svg',
    ],
  ];
  return (
    <div className="my-edit-container">
      <BtnWithDropdown
        button_name="Share"
        button_img="https://getliner.com/src/images/share-header.svg"
        lists={lists}
      />
    </div>
  );
}

export function MyExport() {
  const [more, setMore] = useState(false);
  const onMore = () => {
    setMore(!more);
  };
  const buttons = [
    ['Word', 'https://getliner.com/src/images/word.svg'],
    ['OneNote', 'https://getliner.com/src/images/onenote.svg'],
    ['Everote', 'https://getliner.com/src/images/evernote.svg'],
    ['Text', 'https://getliner.com/src/images/text.svg'],
  ];
  const onClickOutsideContainer = (e) => {
    if (e.target !== e.currentTarget) return;
    setMore(false);
  };
  return (
    <>
      <div className="export-container">
        <div className="btn-hover-name__container dropdown-hover-name">
          <span className="btn-hover-name__name">Export</span>
        </div>
        <button className="export-btn btn" onClick={onMore}></button>
        {more && (
          <div
            className="btn-modal__container"
            onClick={(e) => onClickOutsideContainer(e)}
          >
            <div className="btn-modal__content export-modal__container">
              <div className="btn-modal__titleline myexport-titleline">
                <span className="btn-modal__titleline__title">Export</span>
                <button
                  className="btn-modal__titleline__close"
                  onClick={onMore}
                ></button>
              </div>
              <span className="myexport-modal-subtitle">
                Export your highlights
              </span>
              <div className="myexport-buttons__container">
                {buttons.map((b, i) => (
                  <div className="export-button__container" key={i}>
                    <button className="export-button__btn">
                      <img
                        src={b[1]}
                        alt=""
                        className="export-button__btn__img"
                      />
                    </button>
                    <span className="btn-name">{b[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export function MyMore() {
  const lists = [
    ['Edit a title', 'https://getliner.com/src/images/edit-header.svg'],
    ['View Original', 'https://getliner.com/src/images/original-dropdown.svg'],
    ['More to trash', 'https://getliner.com/src/images/delete-tooltip.svg'],
  ];
  const button_img = 'https://getliner.com/src/images/more-light.svg';
  const button_name = 'More';
  return (
    <div className="my-more-container">
      <BtnWithDropdown
        lists={lists}
        button_img={button_img}
        button_name={button_name}
      />
    </div>
  );
}
export function MyDeleteBtn() {
  const [modal, setModal] = useState(false);
  const onModalToggle = () => {
    setModal(!modal);
  };
  const onClickOutsideContainer = (e) => {
    if (e.target !== e.currentTarget) return;
    setModal(false);
  };
  return (
    <div className="my-deleteBtn-container">
      {modal && (
        <div
          className="btn-modal__container "
          onClick={(e) => onClickOutsideContainer(e)}
        >
          <div className="btn-modal__content delete-modal-container">
            <div className="btn-modal__titleline">
              <h3 className="btn-modal__titleline__title">
                Move 1 page to trash
              </h3>
              <button
                className="btn-modal__titleline__close "
                onClick={onModalToggle}
              ></button>
            </div>
            <span className="btn-modal-description">
              You can restore it in the trash
            </span>
            <div className="button-box">
              <button className="cancel delete-box-btn" onClick={onModalToggle}>
                Cancel
              </button>
              <button className="delete delete-box-btn">Delete</button>
            </div>
          </div>
        </div>
      )}
      <button className="delete-btn btn" onClick={onModalToggle}></button>
    </div>
  );
}
export function GobackBtn() {
  let history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return <button className="goBack-btn btn" onClick={handleClick}></button>;
}
export function EditpenBtn() {
  return <button className="editpen-btn btn"></button>;
}
