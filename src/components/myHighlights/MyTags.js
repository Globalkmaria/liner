import React from 'react';
import './MyTags.scss';
function MyTags({ myTags }) {
  return (
    <div className="mytags-container">
      <span className="tag-icon"></span>
      {myTags.length ? (
        <ul className="mytags-contant">
          {myTags.map((mytag, i) => (
            <li className="mytags-li" key={i}>
              {mytag}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
      <button className="editTag">Edit Tag</button>
    </div>
  );
}

export default MyTags;
