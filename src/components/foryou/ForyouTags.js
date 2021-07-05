import React from 'react';
import './ForyouTags.scss';

function ForyouTags({ siteTags }) {
  return (
    <div className="summeryitem-siteTags">
      <ul>
        {siteTags.map((sTag, i) => (
          <li className="siteTag" key={i}>
            #{sTag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ForyouTags;
