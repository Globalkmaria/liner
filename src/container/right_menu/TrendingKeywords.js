import React from 'react';
import { trend_tag } from '../../data';
import './RightMenu.scss';

function TrendingKeywords() {
  return (
    <div className="tranding-keywords right-menu">
      <div className="right-menu__title">
        <h2>Trending Keywords</h2>
      </div>
      <div className="border"></div>
      <div className="tranding-keywords__content">
        {trend_tag.map((tag, i) => (
          <span className="tranding-tag" key={i}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TrendingKeywords;
