import React from 'react';
import DetailCommon from '../components/common/DetailCommon';
import LinerMore from '../container/right_menu/LinerMore';
import PeopleAlso from '../container/right_menu/PeopleAlso';
import { myHightlight } from '../data';
function MyHighlightDetailPage({ match }) {
  const id = match.params.id;
  const item = myHightlight.find((v) => v.id * 1 === id * 1);
  return (
    <main className="middle-container">
      <div className="main">
        <DetailCommon item={item} myHi />
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

export default MyHighlightDetailPage;
