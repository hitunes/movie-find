import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
//switch will redirect the page to error once it does not recognize path
// const add = (a,b) => {return a + b}
// const add = (a,b) => a + b
// Hashrouter---higher order component that inroduce behaviours
// browserrouter---higher order component that inroduce behaviours set in webpackconfig devserver historyApiFallback: true to make error 404s fall back to index.html
const FourohFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route component={FourohFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
