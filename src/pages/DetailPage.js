import React from 'react';
import { myHightlight } from '../data';
function DetailPage({ match }) {
  console.log('detail page');
  const id = match.params.id;
  const item = myHightlight.find((v) => v.id * 1 === id * 1);
  return <div></div>;
}

export default DetailPage;
