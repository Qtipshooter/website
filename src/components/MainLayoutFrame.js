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