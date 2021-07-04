import React from 'react';
import MyTitle from '../container/main/MyTitle';
import LinerMore from '../container/right_menu/LinerMore';

function MyHighlightPage() {
  return (
    <main className="middle-container">
      <div className="main">
        <MyTitle />
        {/* <MySummery /> */}
      </div>
      <div className="rightMenu">
        <div className="rightMenu-container">
          {/* <PeoplePages /> */}
          <LinerMore />
        </div>
      </div>
    </main>
  );
}

export default MyHighlightPage;
