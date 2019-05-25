import React from "react";
import ReactDOM from "react-dom";
import Markdown from "./Markdown";
import './index.scss';

import("../pkg").then(_d => {
  console.log(_d);
  ReactDOM.render(<Markdown text={"## WTF [i](/lol)"} _d={_d} />,
                  document.getElementById('homePage'));

});
