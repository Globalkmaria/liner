import React from 'react';
import {
  ForSaveBtn,
  ForMoreBtn,
  ForMoreBtnNoHide,
  ForShareBtn,
} from './common/Buttons';

function ForyouBtn({ link }) {
  return (
    <>
      <ForSaveBtn />
      <ForShareBtn link={link} />
      <ForMoreBtn />
    </>
  );
}
export default ForyouBtn;

export function ForyouBtnDetail({ link }) {
  return (
    <>
      <ForSaveBtn />
      <ForShareBtn link={link} />
      <ForMoreBtnNoHide />
    </>
  );
}
