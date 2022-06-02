import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import "./fonts/GillSans.ttc";
import "./fonts/DIN Condensed Bold.ttf";
import { SectionVisibilityProvider } from "./components/utils/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SectionVisibilityProvider>
      <App />
    </SectionVisibilityProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
