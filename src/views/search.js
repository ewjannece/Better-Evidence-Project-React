import React from 'react'

import { Helmet } from 'react-helmet'

import './search.css'

const Search = (props) => {
  return (
    <div className="search-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="search-search">
        <div className="search-search1">
          <img
            alt="Rectangle19071765"
            src="/external/rectangle19071765-0ipp-1900w.png"
            className="search-rectangle1907"
          />
          <img
            alt="iconamooncloselight1765"
            src
            className="search-iconamooncloselight"
          />
          <img
            alt="LinkBetterEvidenceProjectREVgoldwidepng1765"
            src="/external/linkbetterevidenceprojectrevgoldwidepng1765-d10r-200h.png"
            className="search-link-better-evidence-project-r-vgoldwidepng"
          />
          <div className="search-frame10692762">
            <span className="search-text">
              <span>Search</span>
            </span>
            <div className="search-group1216400475">
              <div className="search-frame10692757">
                <div className="search-frame10692756">
                  <img
                    alt="iconamoonsearchlight1765"
                    src="/external/iconamoonsearchlight1765-w5d.svg"
                    className="search-iconamoonsearchlight"
                  />
                  <span className="search-text02">
                    <span>Search</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className="search-text04">
            <span className="search-text05">
              For example:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Resource Library Data</span>
          </span>
        </div>
        <div className="search-frame6">
          <div className="search-frame2">
            <span className="search-text07">
              <span>Home</span>
            </span>
            <span className="search-text09">
              <span>Our Story</span>
            </span>
            <span className="search-text11">
              <span>Resource Center</span>
            </span>
          </div>
        </div>
        <button className="search-bigbutton">
          <span className="search-text13">
            <span>Get Involved</span>
          </span>
        </button>
        <img
          alt="iconamooncloselight2861"
          src="/external/iconamooncloselight2861-zpcj.svg"
          className="search-iconamooncloselight1"
        />
      </div>
    </div>
  )
}

export default Search
