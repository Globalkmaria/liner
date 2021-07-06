import React from 'react';
import { MoreBtn, MoreBtnNoHide, SaveBtn, ShareBtn } from './common/Buttons';

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

export function ForyouBtnDetail({ link }) {
  return (
    <>
      <SaveBtn />
      <ShareBtn link={link} />
      <MoreBtnNoHide />
    </>
  );
}
