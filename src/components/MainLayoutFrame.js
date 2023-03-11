//MainLayoutFrame.js
//Quinton Graham 2023
//Defines the header, footer, and where the outlet for
//remaining content is

import React from "react";
import {Outlet} from "react-router-dom";

function MainLayoutFrame() {
  return (
    <div>
      <div id="header">Header</div>
      <div id="content">
        <Outlet />
      </div>
      <div id="footer">Footer</div>
    </div>
  )
}

export default MainLayoutFrame;