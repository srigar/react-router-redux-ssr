import React from "react";
import App from "./app.component";
import Home from "./components/home/home.component";
import Users from "./components/users/users.component";
import NotFound from "./components/notFound/notFound.component";

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true
      },
      {
        ...Users,
        path: "/users"
      },
      {
          ...NotFound
      }
    ]
  }
];
