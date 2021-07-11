/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import { CollapseBtn, ExtendBtn } from '../../components/common/Buttons';
import './MyTitle.scss';
function MyTitle() {
  const pageType_option = ['Web', 'PDF'];
  const colors = [
    { name: 'Yellow', rgb: '#ffff83', locked: false },
    { name: 'Mint', rgb: '#a6ffe9', locked: false },
    { name: 'Orange', rgb: '#ffc7ba', locked: true },
    { name: 'Violet', rgb: '#d9c3ff', locked: true },
    { name: 'Blue', rgb: '#b8dcff', locked: true },
    { name: 'Pink', rgb: '#ffd0ef', locked: true },
  ];
  const search_option = ['Title', 'URL', 'Highlight', 'Description', 'Comment'];

  const [infoModal, setInfoModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [tagModal, setTagModal] = useState(false);
  const [pageType, setPageType] = useState(
    Array(pageType_option.length).fill(true)
  );
  const [colorChecked, setcolorChecked] = useState(
    Array(colors.length).fill(false)
  );
  const [searchOptionOpen, setSearchOptionOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchOption, setSearchOption] = useState(
    Array(search_option.length).fill(true)
  );
  const infoRef = useRef(null);
  const searchRef = useRef(null);
  const searchOptionRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', scrollChange);
    let info = infoModal || false;
    let searchOption = searchOptionOpen || false;
    let search = searchFocus || false;
    if (info) {
      document.addEventListener('mousedown', onInfoModalClose, false);
    }
    if (searchOption) {
      document.addEventListener('mousedown', onSearchOptionClose, false);
    }
    if (search) {
      document.addEventListener('mousedown', onSearchClose, false);
    }
    return () => {
      document.removeEventListener('mousedown', onInfoModalClose, false);
      document.removeEventListener('mousedown', onSearchOptionClose, false);
      document.removeEventListener('mousedown', onSearchClose, false);
    };
  }, [infoModal, openFilterModal, searchOptionOpen, searchFocus]);

  const total_pages = 4;
  const total_highlights = 5;
  const onInfoModalToggle = () => {
    setInfoModal(!infoModal);
  };
  const onInfoModalClose = (e) => {
    if (!infoRef.current.contains(e.target)) {
      setInfoModal(false);
    }
  };

  const scrollChange = () => {
    if (window.scrollY >= 20) {
      setInfoModal(false);
    }
  };
  // Filter
  const onFilterModal = () => {
    setOpenFilterModal(!openFilterModal);
  };
  const onFilterModalClose = (e) => {
    if (e.target.className.includes('filter-modal-background')) {
      setOpenFilterModal(false);
    }
  };
  // Filter Tags
  const onTagInput = () => {
    setTagModal(!tagModal);
  };
  // Filter-color

  const onColorChecked = (e) => {
    const id = e.target.id || e.target.parentNode.id;
    const disabled_colors = [2, 3, 4, 5];
    if (!id) return;
    if (disabled_colors.includes(id * 1)) return;
    const new_colorChecked = colorChecked.map((v, i) =>
      i === id * 1 ? !v : v
    );
    setcolorChecked(new_colorChecked);
  };
  // Fileter-page_type

  const onPageTypeCheck = (e) => {
    const id = e.target.id || e.target.parentNode.parentNode.id;
    if (!id) return;
    const new_pageType = pageType.map((v, i) => (i === id * 1 ? !v : v));
    setPageType(new_pageType);
  };

  // Search
  const onSearchOption = (e) => {
    e.stopPropagation();
    setSearchOptionOpen(!searchOptionOpen);
  };
  const onSearchOptionClose = (e) => {
    if (!searchOptionRef.current.contains(e.target)) {
      setSearchOptionOpen(false);
    }
  };
  const onSearchFocus = () => {
    setSearchFocus(true);
    setSearchOptionOpen(false);
  };
  const onSearchBlur = (e) => {
    e.stopPropagation();
    setSearchFocus(false);
  };
  const onSearchClose = (e) => {
    if (!searchRef.current.contains(e.target)) {
      setSearchFocus(false);
    }
  };

  const onSearchOptionCheck = (e) => {
    const id = e.target.id;
    let new_search_option = searchOption.map((v, i) => (i === id * 1 ? !v : v));
    setSearchOption(new_search_option);
  };
  return (
    <>
      <div className="my-title">
        {/* <div className="for-title-main"> */}
        {/* title */}
        <div className="my-title-titleline">
          <h1>My Highlights</h1>
          {/* my-highlight info */}
          <button className="info-btn" onClick={onInfoModalToggle}></button>
          {/* info modal lottie */}
          {infoModal && (
            <div className="info-modal-container" ref={infoRef}>
              <div className="motal-triangle"></div>
              <div className="motal-inner">
                <button
                  className="close-btn"
                  onClick={onInfoModalToggle}
                ></button>
                <div className="lottie-container">
                  <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets8.lottiefiles.com/packages/lf20_islctonl.json"
                    style={{ width: '320px' }}
                  ></lottie-player>
                </div>
                <div className="motal-inner-description">
                  <h4>My Highlights</h4>
                  <p>
                    All your work, including highlights and comments will be
                    safely stored on this page.
                  </p>
                </div>
              </div>
            </div>
          )}
          <button className="my-title-pdf">
            <div className="pdf-button">
              <img
                className="plus-img"
                src="https://getliner.com/src/images/add-highlights.svg"
                alt="add icon"
              />
              <span>PDF</span>
            </div>
          </button>
        </div>
        {/* my highlights summery */}
        <div className="my-title-summary">
          <span className="my-title-summary-pages summary-content">
            {total_pages} Pages
          </span>
          <div className="middle-dot"></div>
          <span className="my-title-summary-highlights summary-content">
            {total_highlights} Highlights
          </span>
        </div>
      </div>
      {/*  sticky */}
      <div className="my-title-nav sticky-zindex">
        {/* TABS */}
        {!searchFocus && (
          <div className="my-nav-tab">
            <a href="#" className="tab-item tab-highlights">
              Highlights
            </a>
            <a href="#" className="tab-item tab-tags">
              Tags
            </a>
          </div>
        )}
        <div
          className="my-nav-right"
          style={!searchFocus ? { width: '284px' } : { width: '100%' }}
        >
          {/* FILTER */}
          {!searchFocus && (
            <div className="my-nav-filter">
              <button
                className="filter-btn btn icon-hover"
                onClick={onFilterModal}
              ></button>
              {/* modal */}
              {openFilterModal && (
                <div
                  className="filter-modal-background modal"
                  onClick={(e) => onFilterModalClose(e)}
                >
                  <div className="filter-modal-container modal-container">
                    <h2 className="modal-title">
                      Filter
                      <button
                        className="close-btn icon-hover"
                        onClick={onFilterModal}
                      ></button>
                    </h2>

                    <div className="modal-items">
                      {/* Tags */}
                      <div className="modal-item">
                        <h3 className="item-title">Tags</h3>
                        <div className="item-content tag-content">
                          <div className="tag-input-container">
                            <img
                              src="https://getliner.com/src/images/tag-small.svg"
                              alt="tag icon"
                              className="tag-icon"
                            />
                            <div className="selected-tags">
                              {/* selected tags */}
                              <input
                                type="text"
                                className="tag-input"
                                placeholder="Search tags"
                                onBlur={onTagInput}
                                onFocus={onTagInput}
                              />
                            </div>
                          </div>
                          {tagModal && (
                            <div className="tag-dropdown modal-container">
                              <span>No Tags</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="modal-item colors">
                        {/* Color Filter */}
                        <h3 className="item-title">Color Filter</h3>
                        <ul className="item-content">
                          {colors.map((color, i) => (
                            <li
                              className={`color ${
                                color.locked ? 'color-locked' : 'color-unlocked'
                              }`}
                              key={i}
                            >
                              <div
                                className="about-color"
                                id={i}
                                onClick={(e) => onColorChecked(e)}
                              >
                                <span
                                  className="pallete"
                                  style={{ backgroundColor: `${color.rgb}` }}
                                >
                                  {color.locked && (
                                    <img
                                      src="https://getliner.com/src/images/lock-tooltip.svg"
                                      className="locked"
                                      alt="locked"
                                    />
                                  )}
                                </span>
                                <span
                                  className={`name ${
                                    color.locked ? 'name--locked' : ''
                                  } ${colorChecked[i] ? 'name--checked' : ''}`}
                                >
                                  {color.name}
                                </span>
                              </div>
                              <div className="selected">
                                {colorChecked[i] && (
                                  <span className="checked"></span>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="modal-item">
                        {/* Page type */}
                        <h3 className="item-title ">Page type</h3>
                        <ul className="item-content pageType-content">
                          <li
                            className="pageType-option-container"
                            id="0"
                            onClick={(e) => onPageTypeCheck(e)}
                          >
                            <span className="option-header">
                              {pageType[0] ? (
                                <img
                                  src="https://getliner.com/src/images/web-filter-selected.svg"
                                  alt="web checked icon"
                                  className="option-header-icon"
                                />
                              ) : (
                                <img
                                  src="https://getliner.com/src/images/web-filter.svg"
                                  alt="web"
                                  className="option-header-icon"
                                />
                              )}
                              <span
                                className={`type-name ${
                                  pageType[0] ? 'type-name--checked' : ''
                                }`}
                              >
                                Web
                              </span>
                            </span>
                            {pageType[0] && (
                              <div className="selected">
                                <span className="checked"></span>
                              </div>
                            )}
                          </li>
                          <li
                            className="pageType-option-container"
                            id="1"
                            onClick={(e) => onPageTypeCheck(e)}
                          >
                            <span className="option-header">
                              {pageType[1] ? (
                                <img
                                  src="https://getliner.com/src/images/pdf-filter-selected.svg"
                                  alt="pdf-checked"
                                  className="option-header-icon"
                                />
                              ) : (
                                <img
                                  src="https://getliner.com/src/images/pdf-filter.svg"
                                  alt="pdf"
                                  className="option-header-icon"
                                />
                              )}
                              <span
                                className={`type-name ${
                                  pageType[1] ? 'type-name--checked' : ''
                                }`}
                              >
                                PDF
                              </span>
                            </span>
                            {pageType[1] && (
                              <div className="selected">
                                <span className="checked"></span>
                              </div>
                            )}
                          </li>
                        </ul>
                      </div>
                      <div className="seperator"></div>
                      <div className="modal-footer">
                        <button className="reset">Reset</button>
                        <button className="apply" onClick={onFilterModal}>
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* SEARCH */}
          <div className="my-nav-search">
            <div className="search-content" ref={searchRef}>
              {searchFocus && (
                <div className="search-option" ref={searchOptionRef}>
                  <button
                    className="search-option-btn"
                    onClick={(e) => onSearchOption(e)}
                  >
                    <span className="search-option-title">Search Option</span>
                    {searchOptionOpen ? <CollapseBtn /> : <ExtendBtn />}
                  </button>
                  {/* search dropdown */}
                  {searchOptionOpen && (
                    <ul className="modal-container search-dropdown">
                      <span className="search-dropdown-title modal-subtitle">
                        Search Option
                      </span>

                      {search_option.map((option, i) => (
                        <li
                          className="option-li "
                          key={i}
                          id={i}
                          onClick={(e) => onSearchOptionCheck(e)}
                        >
                          <span
                            className={`${
                              searchOption[i] ? 'option-check' : ''
                            }`}
                          >
                            {option}
                          </span>
                          {searchOption[i] && (
                            <div className="selected">
                              <span className="checked"></span>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              <div className="search-input-container" onClick={onSearchFocus}>
                <div className="input-wrapper">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search my highlights"
                  />
                  {/* close / search icon */}
                  {!searchFocus ? (
                    <button className="search search-btn icon-hover"></button>
                  ) : (
                    <button
                      className="close search-btn icon-hover"
                      onClick={(e) => onSearchBlur(e)}
                    ></button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span
        className="search-description"
        style={{ opacity: `${searchFocus ? '1' : '0'}` }}
      >
        Search results from my highlights
      </span>
    </>
  );
}

export default MyTitle;
