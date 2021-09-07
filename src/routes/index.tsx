import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Countries from 'pages/Countries';
import Slot from 'pages/Slot';

const Routes = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={(props: JSX.IntrinsicAttributes) => <Countries {...props} />} />
        <Route path="/slot" exact component={(props: JSX.IntrinsicAttributes) => <Slot {...props} />} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
