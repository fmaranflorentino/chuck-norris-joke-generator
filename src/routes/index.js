import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';

import Home from '~/pages/Home';

export default function Routes() {
  const Layout = DefaultLayout;

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <Layout>
            <Home />
          </Layout>
        )}
      />
    </Switch>
  );
}
