import React from 'react';
import './LeftNav.scss';
function findmenu(path) {
  if (path === 'home') {
    return [1, 0, 0];
  } else if (path === 'myhighlight') {
    return [0, 1, 0];
  } else {
    return [0, 0, 1];
  }
}
function LeftNav() {
  let path = (window.location.pathname.match(/(?:\/)(\w+)/) || ['', 'home'])[1];
  let menuArray = findmenu(path);

  return (
    <div className="leftNave">
      <a
        href="/home"
        id="0"
        className={`myHighlight menu ${menuArray[0] && 'active'}`}
      >
        For You
      </a>
      <a
        href="/myhighlight"
        id="1"
        className={`myHighlight menu ${menuArray[1] && 'active'}`}
      >
        My Hightlights
      </a>
      <a
        href="/more"
        id="2"
        className={`myHighlight menu ${menuArray[2] && 'active'}`}
      >
        More
      </a>
    </div>
  );
}

export default LeftNav;
