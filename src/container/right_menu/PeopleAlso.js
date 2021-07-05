import React from 'react';
import './RightMenu.scss';
import RightRecomendationContents from './RightRecomendationContents';
import { people_also_read } from '../../data';

function PeopleAlso() {
  return (
    <RightRecomendationContents
      title="People Also Read"
      data={people_also_read}
    />
  );
}

export default PeopleAlso;
