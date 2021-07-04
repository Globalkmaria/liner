import React from 'react';
import RightRecomendationContents from './RightRecomendationContents';
import { trending_pages } from '../../data';
import './RightMenu.scss';
function TrandingPages() {
  return (
    <RightRecomendationContents title="Trending Pages" data={trending_pages} />
  );
}

export default TrandingPages;
