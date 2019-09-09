import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Checkout from './pages/Checkout/index';
import NoMatchForm from './pages/NoMatchForm/index';
import PageUnderConstruction from './pages/PageUnderConstruction/index';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={() => (<Redirect to='/payment' />)} />
        <Route path="/payment" component={ Checkout } />
        <Route path="/page" component={ PageUnderConstruction } />
        <Route component={ NoMatchForm } />
    </Switch>
  );
}

export default App;
