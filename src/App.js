import React from "react";
import { Collaborate } from "./components/Collaborate/Collaborate";
import { OurCommunity } from "./components/OurCommunity/OurCommunity";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Location } from "./components/Location/Location";
import { OurMenu } from "./components/OurMenu/OurMenu";
import { Recipes } from "./components/Recipes/Recipes";

function App() {
  return (
    <div className="main">
      <Home />
      <OurCommunity />
      <Location />
      <OurMenu />
      <Recipes />
      <Collaborate />
      <Footer />
    </div>
  );
}

export default App;
