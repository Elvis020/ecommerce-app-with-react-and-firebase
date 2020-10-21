import React from "react";
import {withRouter} from 'react-router-dom';
import "./menuItem.scss";

function MenuItem({ title, imageUrl, size, linkUrl,match, history }) {
  return (
    <>
      {/* Item--1 */}
      <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <div className="backgroundImage" style={{
          backgroundImage: `url(${imageUrl})`,
        }}></div>
        <div className="content">
          <h1 className="title">{title.toUpperCase()} </h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
}

export default withRouter(MenuItem);
