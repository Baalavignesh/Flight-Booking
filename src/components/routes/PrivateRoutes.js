import React, { Component } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { Outlet, Navigate, Route } from "react-router-dom";

export default class PrivateRoute extends Component {
  render() {
    let isLoggedIn = reactLocalStorage.get("authToken");
    let user = reactLocalStorage.get("user");
    console.log(isLoggedIn)
    if (isLoggedIn && user!="admin@admin.com") {
      return <Outlet />
    }else if(isLoggedIn){
      return <Navigate to="/dashboard" replace />;
    }
    return <Navigate to="/login" replace />;
  }
}