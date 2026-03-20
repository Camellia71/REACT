//路由配置
import React from "react";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
//配置路由实例
const router = createBrowserRouter([
  {
    path: "/Layout",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
  },
  {
    path: "/",
    element: <Login />,
  },
]);
export default router;
