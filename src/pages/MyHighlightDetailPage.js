import React from 'react';
import { myHightlight } from '../data';
function MyHighlightDetailPage({ match }) {
  console.log(match.params.id);
  const id = match.params.id;
  console.log(myHightlight.filter((v) => v.id === id));
  return <div></div>;
}

export default MyHighlightDetailPage;
