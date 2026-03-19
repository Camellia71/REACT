//react会等到事件处理函数中的所有代码都运行完毕之后再处理你的state更新，队列都执行完毕之后再进行UI更新，这种特性就是自动批处理
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    //这里可以了解js的作用域，调用的时候只看声明的位置不看调用的环境
    setCount(count + 1); //其实是：setCount((c)=>count+1)
    setCount(count + 1);
    setCount(count + 1);
    //这个就是程序内部的c，是变化的
    setCount((c) => c + 1); //0+1
    setCount((c) => c + 1); //1+1
    setCount((c) => c + 1); //2+1
    console.log(count);
  };
  console.log(123); //这句话只会打印一次，因为等队列执行完毕之后才会进行打印一次
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      {count}
    </div>
  );
}
export default App;
