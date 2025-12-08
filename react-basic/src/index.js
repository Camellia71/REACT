//本文件是项目的入口，项目从这里开始运行

//React必要的两个核心包
import React from "react";
import ReactDOM from "react-dom/client";

//导入项目的根组件
import App from "./App";

//把 App根组件渲染到id为dom的节点上，渲染到public/index.html的root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
