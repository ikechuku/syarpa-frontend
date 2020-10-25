import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../pages/landingpage"));



const App = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />

    </Switch>
  </Suspense>
);

export default App;


