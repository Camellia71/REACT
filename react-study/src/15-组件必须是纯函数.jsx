//纯函数：
//1.只负责自己的任务，不会更改在该函数调用之前就已经存在的对象或者变量
//2.输入相同那么输出就相同

function App() {
  return <div>hello app</div>;
}
//
export default App;

//不纯的函数
// let bar = 1;
// function foo() {
//   bar++;
// }
// foo();
