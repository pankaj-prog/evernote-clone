import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("evernote-container");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
