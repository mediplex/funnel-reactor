import React, { useState, useEffect } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { hostname } from "os";

//TODO: dynamic import
import Page from "./page";

//TODO: from database
import customRedirects from "./page/data/campusturkey.org/custom-redirects";
import PageNotFound from "./page-not-found";

const appRoutes = [
  // will be used to edit the page
  // {
  //   path: "/page/:id",
  //   strict: true,
  //   component: Page
  // },
  {
    path: "/:id",
    strict: true,
    exact: true,
    component: Page
  },
  {
    path: "/",
    strict: true,
    exact: true,
    component: Page
  },
  {
    component: PageNotFound
  }
];

const Router = () => {
  const [routes] = useState(appRoutes);
  const [redirects, setRedirects] = useState([]);

  useEffect(() => {
    //TODO: request from the database customRoutes by hostName
    setRedirects(
      customRedirects.find(redirect => redirect.hostname === hostname())
        .redirects
    );
  }, []);

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

        {redirects.map(redirect => (
          <Redirect
            key={Math.random()
              .toString(36)
              .substring(2, 15)}
            from={redirect.from}
            to={redirect.to}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
