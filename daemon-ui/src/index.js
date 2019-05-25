import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import("./pkg").then(daemon_ui => {
  let evnt = daemon_ui.get_event();
  ReactDOM.render(<App evnt={evnt} />, document.getElementById('root'));
});
