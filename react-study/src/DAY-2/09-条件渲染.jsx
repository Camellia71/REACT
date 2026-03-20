function App() {
  let content;
  let count = 3;
  if (count > 1) {
    content = <div>hello react</div>;
  } else {
    content = <p>hi javascript</p>;
  }
  return (
    <>
      <div>{content}</div>
      {/* 条件运算符 */}
      <div>{count > 1 ? <div>hello react</div> : <p>hi javascript</p>}</div>
      {/* && || */}
      <div>{count > 1 && <div>hello react</div>}</div>
      <div>{count <= 1 || <p>hi javascript</p>}</div>
    </>
  );
}
//在这里需要注意的是：布尔值，空字符串，null，undefined，对象，函数都不会被渲染
//可以使用 JSON.stringify() {undefined + ''} 来查看这些值在JSX中是如何被处理的,也就是来让这些被渲染的值变成字符串
export default App;
