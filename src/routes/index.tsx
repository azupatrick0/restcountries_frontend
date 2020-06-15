import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Countries from 'pages/Countries';

const Routes = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={(props: JSX.IntrinsicAttributes) => <Countries {...props} />} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
