import React, { Suspense, lazy } from "react";
import Loading from "../../containers/Loading";
import { Route, Switch } from "react-router-dom";

const Wizard = lazy(() => import("../../containers/Wizard"));
const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Wizard} />

    </Switch>
  </Suspense>
);

export default App;
