import React from 'react';
import SummeryItem from '../../components/common/SummeryItem';
import { myHightlight } from '../../data';
function MySummery() {
  return (
    <div className="summery my-summery">
      {myHightlight.map((data) => (
        <SummeryItem item={data} myHi key={data.id} />
      ))}
    </div>
  );
}

export default MySummery;
