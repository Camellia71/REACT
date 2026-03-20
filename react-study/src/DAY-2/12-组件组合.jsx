//直接嵌套
//zai zhe l
// function Head() {
//   return <div>Hello, Head!</div>;
// }
// function Welcome() {
//   return (
//     <div>
//       Hello, Welcome!
//       <Head />
//     </div>
//   );
// }
// function App() {
//   return (
//     <div>
//       Hello App
//       <Welcome />
//     </div>
//   );
// }
// export default App;

//利用props中的children属性进行组合
// function Head() {
//   return <div>Hello, Head!</div>;
// }
// function Welcome({ children }) {
//   return (
//     <div>
//       Hello, Welcome!
//       {children}
//     </div>
//   );
// }
// function App() {
//   return (
//     <div>
//       Hello App
//       <Welcome>
//         <head />
//       </Welcome>
//     </div>
//   );
// }
// export default App;

//传递多组数据
//用属性进行传递，挂载到子组件上
function Welcome({ top, bottom }) {
  return (
    <div>
      {top}
      hello,Welcome
      {bottom}
    </div>
  );
}
function App() {
  return (
    <div>
      Hello App
      <Welcome top={<div>aaaaaa</div>} bottom={<div>bbbbbb</div>}></Welcome>
    </div>
  );
}
export default App;
