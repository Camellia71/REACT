//immer是一个第三方模块，相对于深拷贝来说，它使拷贝相对便宜，不需要复制数据树的未更改部分，并且在内存中与相同状态的旧版本共享
//npm install immer use-immer
import { useImmer } from "use-immer";
function App() {
  const [list, setList] = useImmer([
    { id: 1, text: "aaa" },
    { id: 2, text: "bbb" },
    { id: 3, text: "ccc" },
  ]);
  const handleClick = () => {
    setList((draft) => {
      console.log(draft);
      draft.push({ id: 4, text: "ddd" });
      draft.splice(2, 1);
      draft[1] = { id: 4, text: "ddd" };
    });
  };
  return (
    <div>
      hello App
      <button onClick={handleClick(list)}>点击</button>
    </div>
  );
}
export default App;

//对象也能直接修改，不用担心嵌套关系
