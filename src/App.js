import React, { useRef } from "react";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="main">
      <Home className={"home_wrapper"} ref={"sec1"} />
      <Home className={"home_wrapper"} ref={"sec2"} />
      <Home className={"home_wrapper"} ref={"sec3"} />
      <Home className={"home_wrapper"} ref={"sec4"} />
      <Home className={"home_wrapper"} ref={"sec5"} />
      <Home className={"home_wrapper"} ref={"sec6"} />
    </div>
  );
}

export default App;
