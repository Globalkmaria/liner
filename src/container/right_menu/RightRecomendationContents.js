import React from 'react';
import './RightMenu.scss';
function RightRecomendationContents({ title, data }) {
  return (
    <div className="recommandation-contents right-menu">
      <div className="right-menu__title">
        <h2>{title}</h2>
      </div>
      <div className="border"></div>
      <div className="recommand-pages">
        {data.map((page, i) => (
          <div className="recommand-page" key={i}>
            {page.tags.length ? (
              <div className="recommand-page__tags">
                {page.tags.map((tag, i) => (
                  <span className="recommand-page__tag" key={i}>
                    #{tag}
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
            <h2 className="recommand-page__title">{page.title}</h2>
            <a className="recommand-page__link" href={page.link}>
              {page.link}
            </a>
          </div>
        ))}
      </div>
      <div className="showMore">
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
