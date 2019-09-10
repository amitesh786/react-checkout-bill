import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Checkout from './pages/Checkout/index';
import NoMatchForm from './pages/NoMatchForm/index';
import PageUnderConstruction from './pages/PageUnderConstruction/index';

import Dashboard from './dashboad/Dashboard/index';
import SignIn from './signin/SignIn/index';

function App() {
  return (
    <Switch>
        <Route path="/signin" component={ SignIn } />
        <Route exact path="/" component={() => (<Redirect to='/signin' />)} />
        <Route path="/payment" component={ Checkout } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/page" component={ PageUnderConstruction } />
        <Route component={ NoMatchForm } />
    </Switch>
  );
}

export default App;
