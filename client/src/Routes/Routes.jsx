import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cars from '../components/Cars/Cars'
import { DifferentPlanOptions } from "../components/PlanOptions/DiffPlanOptions";

function Routes() {
  return (
    <>
      <Switch>

        <Route path="/cars" exact>
          <Cars />
        </Route>

        <Route path="/plans">
          <DifferentPlanOptions></DifferentPlanOptions>
        </Route>

        <Route>
          <h1>404:Page not found</h1>
        </Route>
      </Switch>
    </>
  )
}

export default Routes;
