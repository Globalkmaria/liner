import React from 'react';
import './MyTags.scss';
function MyTags({ myTags }) {
  return (
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
  );
}

export default MyTags;
