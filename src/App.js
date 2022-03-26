import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import SearchPage from "./pages/searchPage/searchPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <SearchPage />
      </Route>
    </div>
  );
} 

export default App;
