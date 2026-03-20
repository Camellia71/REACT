//修改数组的方法. map ,slice...
import { useState } from "react";
import { cloneDeep } from "lodash";
function App() {
  const [list, setList] = useState([
    { id: 1, text: "aaa" },
    { id: 2, text: "bbb" },
    { id: 3, text: "ccc" },
  ]);
  const handleClick = () => {
    //展开运算符
    setList([...list], { id: 4, text: "ddd" });
    //map
    setList(
      list.map((item) => {
        if (item.id === 2) {
          return { ...item, text: "ddd" };
        } else {
          return item;
        }
      }),
    );
    //slice
    setList([...list.slice(0, 1), { id: 4, text: "ddd", ...list.slice(1) }]);
    //lodash库的深拷贝
    const cloneList = cloneDeep(list);
    cloneList.reverse();
    setList(cloneList);
  };
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
    </div>
  );
}
export default App;
