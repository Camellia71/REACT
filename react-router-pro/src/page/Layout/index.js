import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      我是一级路由Layout
      <Link to="/">Board</Link>
      {/* <Link to="/board">Board</Link> */}
      <Link to="/about">About</Link>
      {/* 配置二级路由出口 */}
      <Outlet />
    </div>
  );
};
export default Layout;
