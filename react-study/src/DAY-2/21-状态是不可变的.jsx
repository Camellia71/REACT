import { useState } from "react";
//当修改状态的值没有发生变化的时候，就不会重新渲染组件
function App() {
  const [list, setList] = useState([
    { id: 1, text: "aaa" },
    { id: 2, text: "bbb" },
    { id: 3, text: "ccc" },
  ]);
  const handleClick = () => {
    // list.push({ id: 4, text: "ddd" });
    // //点击之后不会重新渲染，因为push方法是直接改变原数组，也就是说在setList调用之前就已经变化过了，即setList面对的是“没有变化的数组”。--这种写法是错误的
    // setList(list);

    //right
    setList([...list], { id: 4, text: "ddd" });
  };
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
    </div>
  );
}
export default App;
