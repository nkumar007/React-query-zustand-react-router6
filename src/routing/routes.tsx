import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";
import UserDetailPage from "./UserDetailPage";
import UserListPage from "./UserListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "login", element: <LoginPage /> }],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "users",
        element: <UserListPage />,
        children: [
          {
            path: "/users/:id",
            element: <UserDetailPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
