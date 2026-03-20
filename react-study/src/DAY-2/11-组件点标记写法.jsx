// function Welcome() {
//   return <div>hello welcome</div>;
// }
// function App() {
//   return (
//     <div>
//       hello app
//       <Welcome />
//     </div>
//   );
// }
// export default App;

//点标记写法：
// 1.对象写法：其实就是写成对象的一种方法

//优点：可以直接进行解构
//解构具体形式是什么？就是在函数参数中直接写成{Welcome}，这样就可以直接使用Welcome组件了，不需要再写成Qf.Welcome了
// const Qf = {
//   Welcome() {
//     return <div>hello welcome</div>;
//   },
// };
// function App() {
//   return (
//     <div>
//       hello app
//       <Qf.Welcome />
//     </div>
//   );
// }
// export default App;

// 2.函数写法：其实就是写成函数的一种方法
const Qf = () => {
  return <div>Qf</div>;
};
const Welcome = () => {
  return <div>Welcome</div>;
};
// const { Welcome } = Qf;
function App() {
  return (
    <div>
      hello app
      <Welcome />
      <Qf />
      {/* <Qf.Welcome /> */}
      {/* 这种写法是错误的，因为Welcome不是Qf的属性，而是一个独立的函数组件 */}
    </div>
  );
}
export default App;
