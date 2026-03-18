// //子组件：整体接收props对象
// function Welcome(props) {
//   return (
//     <div>
//       hello welcome ,{props.count},{props.msg}
//     </div>
//   );
// }
// //父组件：整体传递props对象
// function App() {
//   return (
//     <div>
//       hello app
//       <Welcome count="123" msg="hi react" />
//     </div>
//   );
// }
// export default App;

//子组件：解构接收props对象
//当传递的数据只有属性没有值的时候，就是传递了一个布尔值true
//普通函数和点击事件都可以相互传递
function Welcome({ count, msg, onClick, getData, name, age }) {
  //普通函数可以传过来直接调用
  getData();
  return (
    <div onClick={onClick}>
      hello welcome ,{count},{msg},{name},{age}
    </div>
  );
}
//父组件：解构传递props对象
function App() {
  const count = 123;
  const info = {
    name: "camellia",
    age: 18,
    msg: "hi react",
  };
  const handleClick = () => {
    console.log(1234);
  };
  const getData = () => {
    console.log("普通函数");
  };
  return (
    <div>
      hello app
      <Welcome
        count={count}
        msg="hi react"
        onClick={handleClick}
        getData={getData}
        {...info}
        //...info 这种写法是对象的展开运算符，可以把info对象中的属性和属性值都传递给Welcome组件，这样就不需要一一写出每个属性了
      />
    </div>
  );
}
export default App;
