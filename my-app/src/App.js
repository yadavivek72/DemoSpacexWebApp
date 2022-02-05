import React from "react";

import Missions from "./features/Missions";
import Filters from "./features/Filters";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h2>SpaceX Launch Programs</h2>
      </div>
      <div className="app__content">
        <div className="app__body">
          <Filters />
          <Missions />
        </div>
        <div className="app__footer">
          <h2> Developed by : Vivek Yadav</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
