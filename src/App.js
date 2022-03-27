import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import SearchPage from "./pages/searchPage/searchPage";

function App() {
  return (

      <Route exact path="/">
        <SearchPage />
      </Route>

  );
} 

export default App;
