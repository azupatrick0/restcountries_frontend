import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages';

const Routes = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={(props: JSX.IntrinsicAttributes) => <Home {...props} />} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
