import React, { lazy, useState, Suspense } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Page = lazy(() => import('./public-page'));
const PageNotFound = lazy(() => import('./page-not-found'));
const CustomDomainNameError = lazy(() => import('./custom-domain-name-error'));

const appRoutes = [
  {
    path: '/custom-domain-name-error',
    strict: true,
    exact: true,
    component: CustomDomainNameError
  },
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
      <Suspense fallback={<div>page loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
