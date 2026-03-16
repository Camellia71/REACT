function App() {
  //这些事件都是React合成事件，底层是通过事件委托的方式实现的，所有事件都绑定在document上，利用事件冒泡的机制来触发对应的事件处理函数
  const handleClick = (e) => {
    console.log(e);
  };
  const handleEnter = (num) => {
    // console.log(e);
    return () => {
      console.log(num);
    };
  };
  const handleClick3 = (num, e) => {
    console.log(num, e);
  };
  return (
    <div>
      {/* 在这里加大括号{}其实就是点击后传递函数返回的结果 */}
      <button onClick={handleClick} onKeyDown={handleEnter}>
        click me
      </button>
      <button onClick={handleClick(123)}>传参</button>

      {/* 更推荐箭头函数去写传参；其实是传参或者不传参都能用同一个函数，更灵活 */}
      <button
        onClick={(e) => {
          handleClick3(123, e);
        }}
      >
        传参
      </button>
    </div>
  );
}
export default App;
