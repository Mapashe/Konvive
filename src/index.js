import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Login from './pages/login';
import Registro from './pages/register';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/registro" component={Registro}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);