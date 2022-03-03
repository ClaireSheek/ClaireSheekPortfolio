import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";

import "./App.css";
import SideNav from "./components/SideNav";
function App() {
  const [page, setPage] = useState("");

  return (
    <div className="App">
      <Router className="content">
        <SideNav page={page} setPage={setPage} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/error" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
