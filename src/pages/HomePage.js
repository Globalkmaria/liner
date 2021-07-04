import React from 'react';
import ForSummery from '../container/main/ForSummery';
import ForTitle from '../container/main/ForTitle';
import LinerMore from '../container/right_menu/LinerMore';
import TrandingPages from '../container/right_menu/TrandingPages';
import TrendingKeywords from '../container/right_menu/TrendingKeywords';
import './Pages.scss';
function HomePage() {
  return (
    <main className="middle-container">
      <div className="main">
        <ForTitle />
        <ForSummery />
      </div>
      <div className="rightMenu">
        <div className="rightMenu-container">
          <TrendingKeywords />
          <TrandingPages />
          <LinerMore />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
