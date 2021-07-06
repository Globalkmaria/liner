import React, { useState } from 'react';
import DetailCommon from '../components/common/DetailCommon';
import MoreLike from '../container/main/MoreLike';
import LinerMore from '../container/right_menu/LinerMore';
import PeopleAlso from '../container/right_menu/PeopleAlso';
import { detail_data } from '../data';
function DetailPage({ match, history }) {
  const { id } = match.params;
  const item = detail_data.find((v) => v.id * 1 === id * 1);
  console.log(history);
  const onGoback = () => {
    history.goback();
  };
  return (
    <main className="middle-container">
      <div className="main">
        <DetailCommon item={item} onGoback={onGoback} foryou />
        <MoreLike />
      </div>
      <div className="rightMenu">
        <div className="rightMenu-container">
          <PeopleAlso />
          <LinerMore />
        </div>
      </div>
    </main>
  );
}

export default DetailPage;
