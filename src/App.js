//App.js
//Quinton Graham 2023
//Entry point for the website

import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayoutFrame from "./components/MainLayoutFrame";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayoutFrame />}>
        <Route index element={<h1>Home Page</h1>}></Route>
        <Route path="test" element={<p>Testing Page</p>}></Route>
        <Route path="*" element={<h1>Error 404, where are you?</h1>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)