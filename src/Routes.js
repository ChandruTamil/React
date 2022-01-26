import React from "react";
import { Route, Switch  } from "react-router-dom";
import Map from "./containers/Map/Map";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import Signup from "./containers/SignUp/Signup";
import Dashboard from "./containers/Dashboard/Dashboard";
import Users from "./containers/Users/Users";
import News from "./containers/News/News";
import { useAppContext } from "./lib/contextLib";

export default function Routes() {
  let {isAuthenticated} = useAppContext()
  const authentication = localStorage.getItem('isAuth');
  isAuthenticated = authentication;
  return (
    <div>
      {
      isAuthenticated ?
      (
      <Switch>
        <Route exact default path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      ): (
        <Switch>
          <Route exact default path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        )
      }
      
    </div>
  );
}