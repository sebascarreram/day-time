import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function timeReal() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
setInterval(timeReal, 1000);
