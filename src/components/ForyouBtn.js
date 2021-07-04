import React from 'react';
import { MoreBtn, SaveBtn, ShareBtn } from './common/Buttons';

function ForyouBtn({ link }) {
  return (
    <>
      <SaveBtn />
      <ShareBtn link={link} />
      <MoreBtn hide="hide" />
    </>
  );
}

export default ForyouBtn;
