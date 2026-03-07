//路由配置
import React from "react";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";
//配置路由实例
const router = createBrowserRouter([
  {
    path: "/Layout",
    element: <Layout />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);
export default router;
