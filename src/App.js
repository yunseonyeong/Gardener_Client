import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Basicnav from "./components/nav/basicNav/basicNav";
import Bluenav from "./components/nav/blueNav/blueNav";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Basicnav></Basicnav>
      </Route>
      <Route path="/blue">
        <Bluenav></Bluenav>
      </Route>
    </div>
  );
} 

export default App;
