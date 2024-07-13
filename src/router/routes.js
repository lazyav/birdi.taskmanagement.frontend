import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Welcome from "../component/signing/Welcome";
import Register from "../component/signing/Register";

import Login from "../component/signing/Login";
import Dashboard from "../component/home/Dashboard";
import EditTask from "../component/task/EditTask";
import AddTask from "../component/task/AddTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome></Welcome>,
    children: [
      { path: "", element: <Login></Login> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      { path: "login", element: <Login></Login> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/task",
    element: <Welcome></Welcome>,
    children: [
      { path: "edit", element: <EditTask></EditTask> },
      { path: "add", element: <AddTask></AddTask> },
    ],
  },
]);
