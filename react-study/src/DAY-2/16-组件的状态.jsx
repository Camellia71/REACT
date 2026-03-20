// function App() {
//   let count = 0;
//   const handleClick = () => {
//     count++;
//   };
//   return (
//     <div>
//       hello App
//       <button onClick={handleClick}>点击</button>
//       {count}
//     </div>
//   );
// }
// export default App;

//加入状态
//随时间变化的数据称为状态，状态时可以进行数据驱动视图的
//useState是可以创建和修改数据的方法
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      {count}
    </div>
  );
}
export default App;
