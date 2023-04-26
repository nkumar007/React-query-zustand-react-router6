import { createBrowserRouter, Outlet } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetailPage from "./UserDetailPage";
import UserListPage from "./UserListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UserListPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "users/:id",
        element: <UserDetailPage />,
      },
    ],
  },
]);

export default router;
