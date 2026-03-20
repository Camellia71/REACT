//多状态是如何进行记忆的？
import { useState } from "react";
function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const handleClick = () => {
    //多状态setCount不能放在逻辑中，会有可能影响索引的顺序，状态是以数据对的形式进行存储的，也就是索引对应当前状态，索引就是调用useState的顺序
    //内部逻辑？
    setCount1(count1 + 1);
    setCount2(count1 + 1);
    setCount3(count1 + 1);
  };
  console.log(count1);
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      {count1},{count2},{count3}
    </div>
  );
}
export default App;
