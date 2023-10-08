import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Students from "./Pages/Students";
import Courses from "./Pages/Courses";
import Attendance from "./Pages/Attendance";
import Root from "./Pages/Root";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "students", element: <Students /> },
      { path: "courses", element: <Courses /> },
      { path: "attendance", element: <Attendance /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
