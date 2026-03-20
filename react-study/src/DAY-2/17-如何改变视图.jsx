//普通变量无法改变视图是因为无法重新渲染jsx，因为return只执行了一遍
//state状态为什么可行？因为重新出发了函数组件，并且state状态具备组件的记忆
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0); //记忆功能
  const handleClick = () => {
    setCount(count + 1); //重新触发函数组件的执行
  };
  console.log(count); //每次重新执行函数的count值是不一样的，所以return的值就不一样
  //useState的内部是什么样子的？
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      {count}
    </div>
  );
}
export default App;

//渲染与提交的三个过程：
//1.触发一次渲染；组件的初次渲染，createRoot().render()内部状态更新，触发渲染送入队列
//2.渲染组件；在进行初次渲染时，React会调用根组件内部状态更新，渲染对应的组件
//3.提交到DOM上；reactDOM的更新，只更新差异的DOM节点  ——使用什么方法识别差异的？
