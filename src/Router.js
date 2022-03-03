import React from "react";
import { Switch, Route } from "react-router";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/error" component={ErrorPage} />
    </Switch>
  );
};

export default Router;
