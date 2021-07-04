import { useState } from 'react';
import './Buttons.scss';

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
          <button className="save-btn btn" onClick={onSave}></button>
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
  return (
    <>
      <div className="share-container">
        {share && (
          <div className="share-modal-container">
            <div className="share-modal-content">
              <div className="titleline">
                <h3>Share Original Page</h3>
                <button className="close" onClick={onShare}></button>
              </div>
              <div className="sns-container">
                {sns.map((s) => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a className="sns-button" href="#">
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
        <button className="share-btn btn" onClick={onShare}></button>
      </div>
    </>
  );
}
export function MoreBtn({ hide }) {
  const [more, setMore] = useState(false);
  const onMore = () => {
    setMore(!more);
  };
  return (
    <div className="more-container">
      <button className="more-btn btn" onClick={onMore}></button>
      {more && (
        <ul className="more-dropdown-container">
          <li className="more-container dropdown-li">
            <span className="icon">
              <img src="/assests/svg/like-dropdown.svg" alt="like" />
            </span>
            More pages like this
          </li>
          <li className="fewer-container dropdown-li">
            <span className="icon">
              <img src="/assests/svg/dislike-dropdown.svg" alt="dislike" />
            </span>
            Fewer pages like this
          </li>
          {hide && (
            <li className="hide-container dropdown-li">
              <span className="icon">
                <img src="/assests/svg/hide-dropdown.svg" alt="hide" />
              </span>
              Hide this page
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
