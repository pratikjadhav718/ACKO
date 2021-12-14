import React from "react";
import { Route, Switch } from "react-router-dom";
import { DifferentPlanOptions } from "../components/PlanOptions/DiffPlanOptions";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/plans">
          <DifferentPlanOptions></DifferentPlanOptions>
        </Route>
        <Route>
          <h1>404:Page not found</h1>
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
