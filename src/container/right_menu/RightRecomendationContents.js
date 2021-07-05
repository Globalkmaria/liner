import React from 'react';
import './RightMenu.scss';
function RightRecomendationContents({ title, data }) {
  return (
    <div className="recommandation-contents right-menu">
      <div className="right-title">
        <h2>{title}</h2>
      </div>
      <div className="border"></div>
      <div className="recommandation-contents-pages">
        {data.map((page, i) => (
          <div className="recommand-page" key={i}>
            {page.tags.length ? (
              <div className="page-tags">
                {page.tags.map((tag, i) => (
                  <span className="page-tag" key={i}>
                    #{tag}
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
            <h2 className="page-title">{page.title}</h2>
            <a className="page-link" href={page.link}>
              {page.link}
            </a>
          </div>
        ))}
      </div>
      <div className="recommandation-showMore">
        Show More
        <img
          className="extend"
          src="https://getliner.com/src/images/expand.svg"
          alt="extend"
        />
      </div>
    </div>
  );
}

export default RightRecomendationContents;
