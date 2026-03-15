import { Fragment } from "react";
//1.html的标签都是小写的，而jsx标签可以是大写的，大写的标签会被react当成组件来处理
//2.html的标签只能有一个根标签，而jsx标签可以有多个根标签，jsx标签需要用一个父标签包裹起来，或者使用React.Fragment来包裹起来

//根标签？

//3.html的标签属性只能是字符串，而jsx标签的属性可以是任意表达式，jsx标签的属性值需要用{}包裹起来
//4.html的标签属性名是小写的，而jsx标签的属性名是驼峰命名法的，比如class在jsx中要写成className，for在jsx中要写成htmlFor;自定义属性就没有关系了
function App() {
  return (
    <Fragment>
      <div className="box">
        hello,app
        <lable htmlfor="username">用户名</lable>
        <input id="elem" type="text" tabIndex="1" onClick={() => {}} />
        <div>
          {/* 双大括号的形式，里面可以写任何JavaScript表达式，也就是可以进行赋值的；但是不能放对象或者函数，可以放数组。为什么？ */}
          {1 + 1},
          {[1, 2, 3].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div>hrllo,app2</div>
      {/* 需要只有唯一的根结点：本质上需要把这个转化成对象，所以只能有一个根结点； */}
      {/* 如果确实想要他有多个根结点，并且不希望再套一层div(多余的div会渲染到页面中），可以使用React.Fragment来包裹起来；或者直接使用空标签<></>来包裹起来 */}
    </Fragment>
  );
}
export default App;
