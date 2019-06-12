import React, { useState } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// TODO: dynamic import
import Page from './public-page';

import PageNotFound from './page-not-found';

const appRoutes = [
  {
    path: '/page-not-found',
    strict: true,
    exact: true,
    component: PageNotFound
  },
  {
    path: '/:slug',
    strict: true,
    exact: true,
    component: Page
  },
  {
    path: '/',
    strict: true,
    exact: true,
    component: Page
  }
];

const Router = () => {
  const [routes] = useState(appRoutes);

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route
            key={Math.random()
              .toString(36)
              .substring(2, 15)}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
