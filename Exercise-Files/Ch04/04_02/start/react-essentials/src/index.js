import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';

// const [mostImportanItem] = ["boots", "tent", "headlamp"]
// console.log(mostImportanItem);

ReactDOM.render(
  <App authorized={true} />,
  document.getElementById("root")
);
