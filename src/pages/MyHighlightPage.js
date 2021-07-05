import React from 'react';
import MySummery from '../container/main/MySummery';
import MyTitle from '../container/main/MyTitle';
import LinerMore from '../container/right_menu/LinerMore';
import PeopleAlso from '../container/right_menu/PeopleAlso';

function MyHighlightPage() {
  return (
    <main className="middle-container">
      <div className="main">
        <MyTitle />
        <MySummery />
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

export default MyHighlightPage;
