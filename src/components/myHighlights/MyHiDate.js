import React from 'react';
import './MyHiDate.scss';
function MyHiDate({ date }) {
  return (
    <div className="date-container">
      <div className="date">
        <div className="vertical-line"></div>
        {date}
      </div>
    </div>
  );
}

export default MyHiDate;
