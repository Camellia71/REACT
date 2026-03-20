import { useState } from "react";
import { cloneDeep } from "lodash";
function App() {
  const [info, setInfo] = useState({
    username: "xiaoming",
    age: 20,
  });
  const handleClick = () => {
    //不正确的写法，会覆盖掉之前的内容
    // setInfo({
    //   username: "xiaobai",
    // });

    //可以使用...，如果有嵌套多层的话就要多次使用...

    //lodash
    const cloneInfo = cloneDeep(info);
    cloneInfo.username.first = "da";
    setInfo(cloneInfo);
  };
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      <div>{JSON.stringify(info)}</div>
    </div>
  );
}
export default App;
