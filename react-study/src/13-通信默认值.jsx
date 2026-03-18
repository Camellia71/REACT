//添加默认值，就不会出现只有逗号没有值的情况
// function Welcome({ count = 0 }, { msg = "default content" }) {
//   return (
//     <div>
//       hello Welcome
//       {count},{msg}
//     </div>
//   );
// }
// function App() {
//   return (
//     <div>
//       hello App
//       <Welcome count={1} msg="hello" />
//     </div>
//   );
// }
// export default App;

//使用react自带的defaultProps属性添加默认值
function Welcome({ count }, { msg }) {
  return (
    <div>
      hello Welcome
      {count},{msg}
    </div>
  );
}
Welcome.defaultProps = {
  count: 0,
  msg: "default comtent",
};
function App() {
  return (
    <div>
      hello App
      <Welcome count={1} msg="hello" />
      <Welcome />
    </div>
  );
}
export default App;
