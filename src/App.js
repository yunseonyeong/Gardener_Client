import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import SearchPage from "./pages/searchPage/searchPage";
import ChallengePage from "./pages/teamChallengePage/teamChallengePage";

function App() {
  return (
    <>
      <Route exact path="/search">
        <SearchPage />
      </Route>

      <Route exact path="/challenge">
        <ChallengePage />
      </Route>
    </>
  );
} 

export default App;
