import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AllBook, {
  loader as AllBookLoader,
  action as AllBookAction,
} from "./pages/allBook";
import AddBook, { action as addbookAction } from "./pages/addBook";
import EditBook, {
  action as editbookAction,
  loader as editbookLoader,
} from "./pages/editBook";

const router = createBrowserRouter([
  {
    index: true,
    element: <AllBook />,
    loader: AllBookLoader,
    action: AllBookAction,
  },
  {
    path: "/allbook",
    element: <AllBook />,
    loader: AllBookLoader,
    action: AllBookAction,
  },
  {
    path: "/addbook",
    action: addbookAction,
    element: <AddBook />,
  },
  {
    path: "/editbook/:id",
    element: <EditBook />,
    loader: editbookLoader,
    action: editbookAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
