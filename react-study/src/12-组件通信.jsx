// //子组件：整体接收props对象
// function Welcome(props) {
//   return (
//     <div>
//       hello welcome ,{props.count},{props.msg}
//     </div>
//   );
// }
// //父组件：整体传递props对象
// function App() {
//   return (
//     <div>
//       hello app
//       <Welcome count="123" msg="hi react" />
//     </div>
//   );
// }
// export default App;

//子组件：解构接收props对象
function Welcome({ count, msg }) {
  return (
    <div>
      hello welcome ,{count},{msg}
    </div>
  );
}
//父组件：解构传递props对象
function App() {
  const count = 123;
  return (
    <div>
      hello app
      <Welcome count={count} msg="hi react" />
    </div>
  );
}
export default App;
