import React from 'react';
import sliceSentence from '../../hook/sliceSentence';
import './MyhiHighlights.scss';

function MyhiHighlights({ my_highlight, foryou }) {
  const highlight_color = {
    yellow: 'rgb(255, 255, 131)',
    blue: 'rgb(166, 255, 233)',
  };
  if (!my_highlight.length) return '';
  return (
    <>
      {my_highlight.map((highlight) => (
        <div className="my-highlight__container">
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

export default MyhiHighlights;
