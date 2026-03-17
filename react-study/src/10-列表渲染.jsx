//jsx中默认对数组执行join()操作

//for循环方法
// function App() {
//   const list = ["aaa", "bbb", "ccc"];
//   for (let i = 0; i < list.length; i++) {
//     list[i] = <li>{list[i]}</li>;
//   }
//   return (
//     <div>
//       <ul>{list}</ul>
//     </div>
//   );
// }
// export default App;

//map方法
function App() {
  const list = ["aaa", "bbb", "ccc"];

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
