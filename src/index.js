import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from "./About";
import Main from "./Main";
import {Router, Route, browserHistory, IndexRoute} from "react-router";


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={App}/>
      <Route path="About" component={About} />
    </Route>
  </Router>,
  document.getElementById("app"));
