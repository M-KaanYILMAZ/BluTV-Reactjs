import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "../src/css/App.css";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
