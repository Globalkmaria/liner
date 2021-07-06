import React from 'react';
import SummeryItem from '../../components/common/SummeryItem';
import './MoreLike.scss';

function MoreLike({ items }) {
  return (
    <div className="morelikethis">
      <div className="more__title-box">
        <h2 className="more__title">More Like This</h2>
      </div>
      {items.map((data) => (
        <SummeryItem item={data} foryou morelike key={data.id} />
      ))}
    </div>
  );
}

export default MoreLike;
