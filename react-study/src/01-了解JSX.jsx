function App() {
  //在react中，JSX会被编译成React.createElement函数调用
  //其实完整的流程是JSX->转换为虚拟DOM对象->使用reactDOM渲染到页面上，所以JSX只是一个语法糖，最终会被编译成普通的JavaScript代码
  //JSX是JS的一种语法扩展，react是JS的一个库

  //虚拟DOM是怎么实现的？
  //框架处理的底层？
  console.log(<div>Hello, React!</div>);
  return <div>Hello, React!</div>;
}
export default App;
