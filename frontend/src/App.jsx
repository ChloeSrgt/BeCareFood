import React from "react";
import Home from "@pages/Home";
import WallPic from "./components/WallPic";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <div>
        <WallPic />
      </div>
    </div>
  );
}

export default App;
