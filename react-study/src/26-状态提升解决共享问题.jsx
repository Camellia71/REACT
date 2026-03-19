//多次渲染同一个组件，每个组件都会拥有自己的state，状态是独立的，且不共享的
//如果想实现状态的同时变化，就要提升到父组件中，父组件状态发生变化时，父子通信后子组件也发生变化
import { useState } from "react";
function Button({ count, obClick }) {
  return (
    <div>
      <button onClick={onClick}>点击</button>
      {count}
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      hello App
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </div>
  );
}
export default App;

//状态的重置
//1.组件被销毁时，状态也会被重置
//2.当组件位置没有改变时，状态会被保留
//3.当组件是不同的结构体时，状态会被重置（同层比较）
//4.给组件添加key属性，状态会被重置
