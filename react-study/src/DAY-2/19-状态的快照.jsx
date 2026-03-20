import { useState } from "react";
//快照机制？其实是闭包的特性
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count); //0
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
