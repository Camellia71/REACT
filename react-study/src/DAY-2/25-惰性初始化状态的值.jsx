//惰性初始化是指：当状态的值需要进行复杂计算才能得到时，可以进行惰性初始化操作
import { useState } from "react";
function computed(n) {
  console.log(123);
  return n + 1 + 2 + 3;
}
function App() {
  //每次重新渲染都会重新执行一遍computed的操作，损耗性能
  //   const [count, setCount] = useState(computed(0));
  //解决方法：
  const [count, setCount] = useState(() => computed(0));
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
    </div>
  );
}
export default App;
