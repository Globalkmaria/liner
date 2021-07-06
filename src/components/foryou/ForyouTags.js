import React from 'react';
import './ForyouTags.scss';

function ForyouTags({ siteTags }) {
  if (!siteTags.length) return '';
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
