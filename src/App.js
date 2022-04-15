import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import SearchPage from "./pages/searchPage/searchPage";
import ChallengePage from "./pages/teamChallengePage/teamChallengePage";
import SearchResultPage from "./pages/searchResultPage/searchResultPage";
import MiniGamePage from "./pages/minigamePage/minigamePage";

function App() {
  return (
    <>
      <Route exact path="/search">
        <SearchPage />
      </Route>

      <Route exact path="/search/result">
        <SearchResultPage />
      </Route>

      <Route exact path="/challenge">
        <ChallengePage />
      </Route>

      <Route exact path="/minigame">
        <MiniGamePage />
      </Route>
    </>
  );
} 

export default App;
