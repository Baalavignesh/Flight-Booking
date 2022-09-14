import React, { Component } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { Outlet, Navigate, Route } from "react-router-dom";

export default class AdminRoute extends Component {
  render() {
    let isLoggedIn = reactLocalStorage.get("authToken");
    let user = reactLocalStorage.get("user");

    if (isLoggedIn && user=="admin@admin.com") {
      return <Outlet />;
    }else if(isLoggedIn){
      return <Navigate to="/app" replace />;
    }
    return <Navigate to="/login" replace />;
  }
}