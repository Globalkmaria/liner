import React from 'react';
import { MyMore, MyExport, MyShare, MyDeleteBtn } from './common/Buttons';

function MyBtn() {
  return (
    <>
      <MyShare />
      <MyExport />
      <MyMore />
    </>
  );
}
export default MyBtn;

export function MyDetailBtn() {
  return (
    <>
      <MyShare />
      <MyExport />
      <MyDeleteBtn />
    </>
  );
}
