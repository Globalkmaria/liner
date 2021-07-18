import React from 'react';
import sliceSentence from '../../hook/sliceSentence';
import './Highlights.scss';

function Highlights({ highlights, foryou }) {
  const highlight_color = {
    yellow: 'rgb(255, 255, 131)',
    blue: 'rgb(166, 255, 233)',
  };
  if (!highlights.length) return '';
  return (
    <>
      {highlights.map((highlight, i) => (
        <div className="my-highlight__container" key={i}>
          <div
            className="highlight-border"
            style={{
              borderColor: `${highlight_color[highlight[0]]}`,
            }}
          ></div>
          <p className="hightlight-content">
            {sliceSentence(highlight[1], 240)}
            {foryou && (
              <div className="highligh-by-liner">Highlighted by LINER</div>
            )}
          </p>
        </div>
      ))}
    </>
  );
}

export default Highlights;
