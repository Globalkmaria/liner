import React from 'react';
import SummeryItem from '../../components/common/SummeryItem';
import './ForSummery.scss';
import { detail_data } from '../../data';
function ForSummery() {
  return (
    <div className="summery for-summery">
      {/* <SummeryItem item={detail_data[0]} foryou /> */}
      {detail_data.map((data) => (
        <SummeryItem item={data} foryou key={data.id} />
      ))}
    </div>
  );
}

export default ForSummery;
