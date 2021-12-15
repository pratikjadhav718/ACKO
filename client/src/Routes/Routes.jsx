import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { AddtionalDetails } from '../components/AddtionalDetails/AddtionalDetails';
import Routecarnumber from "../components/Cars/Carnumber/Routecarnumber"

import Routepincode from '../components/Cars/Pincode/Routepincode';
import Routeuseofcar from '../components/Cars/Useofcar/Routeuseofcar';

import { DifferentPlanOptions } from "../components/PlanOptions/DiffPlanOptions";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/cars/useofcar" exact>
          <Routeuseofcar />
        </Route>

        <Route path="/cars/pincode" exact>
          <Routepincode />
        </Route>
        <Route path="/cars/carnumber" exact>
          <Routecarnumber />
        </Route>

        <Route path="/plans">
          <DifferentPlanOptions></DifferentPlanOptions>
        </Route>

        <Route path="/addtional-details">
          <AddtionalDetails />
        </Route>

        <Route>
          <h1>404:Page not found</h1>
        </Route>

      </Switch>
    </>
  );
}

export default Routes;
