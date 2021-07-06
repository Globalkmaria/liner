import React from 'react';
import DetailCommon from '../components/common/DetailCommon';
import MoreLike from '../container/main/MoreLike';
import LinerMore from '../container/right_menu/LinerMore';
import PeopleAlso from '../container/right_menu/PeopleAlso';
import { more_like_this } from '../data';

function Relevantpage({ match }) {
  const { id } = match.params;
  const item = more_like_this.find((v) => v.id * 1 === id * 1);
  const leftItems = more_like_this.filter((v) => v.id * 1 !== id * 1);

  return (
    <main className="middle-container">
      <div className="main">
        <DetailCommon item={item} foryou />
        <MoreLike items={leftItems} />
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

export default Relevantpage;
