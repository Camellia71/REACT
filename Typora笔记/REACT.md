# REACT

![image-20251207165405447](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20251207165405447.png)

## DAY-1

REACT是用于构建Web和原生交互页面的库

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20251207201520958.png" alt="image-20251207201520958" style="zoom:67%;" />

执行上方命令创建一个react项目

[https://zh-hans.react.dev/learn/start-a-new-react-project]()

### 1.`JSX`

#### 1.简介

`JSX` 是 `JavaScript` 和 `XHL(HTML)` 的缩写，表示在`JS` 代码中编写`HTML` 模板结构，是`REACT` 中编写 `UI` 模板的方式；在标准浏览器中不能识别，这属于JS语法扩展，需要解析工具做解析之后才能在浏览器中运行

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20251207202634103.png" alt="image-20251207202634103" style="zoom:67%;" />

优势：HTML的声明式模板写法，JS可编程能力

#### 2.高频场景

在JSX中使用{}就可以编辑JS代码

```jsx
    <div className="App">
      this is App;
      {/*使用引号传递字符串 */}
      {"this is message"}
      {/*识别js变量 */}
      {count}
      {"函数调用"}
      {getName()}
      {"方法调用"}
      {new Date().getDate()}
      {/*使用js对象,{}外层是识别JSX内容的，内层识别对象调用*/}
      <div style={{ color: "red" }}>this is div</div>
    </div>
```

**列表渲染**

```js
const list = [
  { id: 1001, name: "Vue" },
  { id: 1002, name: "React" },
  { id: 1003, name: "Angular" },
];
function App() {
  return (
    <div className="App">
      {/*渲染列表 */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
```

li标签中的key是REACT语言中的标识字段，用来提升列表的更新性能，要求是字符串或者num，开发中基本都是使用id，与我们没有太大关系

**条件渲染**（true或flase对应不同渲染）

在REACT中，可以通过逻辑与运算符，三元表达式实现基础的条件渲染

```js
const isLogin = true;
function App() {
  return (
    <div className="App">
      {/*逻辑&& */}
      {isLogin && <span>this is span</span>}
      {/*三元运算 */}
      {isLogin ? <span>jack</span> : <span>loading...</span>}
    </div>
  );
}

export default App;
```

**复杂条件渲染**

```js
const articleType = 1; //0,1,3
function getArticleTem() {
  if (articleType === 0) {
    return <div>我是无图文章</div>;
  } else if (articleType === 1) {
    return <div>我是单图模式</div>;
  } else {
    return <div>我是三图模式</div>;
  }
}
function App() {
  return (
    <div className="App">
      {/*调用函数渲染不同的模板 */}
      {getArticleTem()}
    </div>
  );
}

export default App;
```

#### 3.REACT中的事件绑定

语法：on + 事件名称 = {事件处理程序}；

```js
function App() {
  const handleClick = () => {
    console.log("button被点击了");
  };
  //传递自定义参数
  const hd = (name) => {
    console.log("hd", name);
  };
  //传递自定义参数＋事件对象
  const hdcms = (name, e) => {
    console.log(name, e);
  };
  return (
    <div className="App">
      <button onclick={handleClick}>click me</button>
      <button onClick={() => hd("jack")}>hd</button>
      <button onClick={(e) => hdcms("hdcms", e)}>hdcms</button>
    </div>
  );
}

export default App;

```

#### 4.REACT组件

一个组件就是用户界面的一部分，它可以有自己的逻辑和外观，组件之间可以相互嵌套，也可以复用多次

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20251209104917359.png" alt="image-20251209104917359" style="zoom:67%;" />

在REACT中，一个组件就是首字母大写的函数，内部存放了组件的逻辑和视图UI，渲染组件只需要把**组件当成标签**书写即可，

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20251209105157080.png" alt="image-20251209105157080" style="zoom:67%;" />

```js
function Button() {
//const Button = ()=>{  //用箭头函数也可以
  //业务逻辑组件逻辑
  return <button>click me!</button>;
}
function App() {
  return (
    <div className="App">
      {/*渲染组件 */}
      {/*自闭合 */}
      <Button />
      {/*成对标签 */}
      <Button></Button>
    </div>
  );
}

export default App;

```

#### 5.useState基础使用

useState是一个React Hook函数，它允许我们向组件添加一个状态变量，从而控制影响组件的渲染结果

本质：状态变量一旦发生变化，组件的视图UI也会跟着变化**（数据驱动视图）**

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20251209175736999.png" alt="image-20251209175736999" style="zoom:67%;" />

```js
//yseState实现一个计数器按钮
import { useState } from "react";
function App() {
  //1.调用useState添加一个状态变量
  //count状态变量
  //setCount 修改状态变量的方法
  const [count, setCount] = useState(0);

  //2.点击事件回调
  const handleClick = () => {
    //作用：1.用传入的新值修改count  2.重新使用新的count渲染UI
    setCount(count + 1);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
```

#### 6.修改状态的规则

在REACT中，状态被认为是只读的，我们应该始终替换他而不是修改它，直接修改状态不会引发视图更新

对于对象类型的状态变量，应该始终传给set方法一个全新的对象来进行修改

```js
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    //直接修改无法引发视图更新
    // count++
    //作用：1.用传入的新值修改count  2.重新使用新的count渲染UI
    //需要重新调用
    setCount(count + 1);
  };

  //修改对象状态
  const [form, setForm] = useState({ name: "'jack" });
  const changeForm = () => {
    //错误写法
    // form.name = 'join';
    //正确方法
    setForm({
      ...form,
      name: "join",
    });
  };
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改form{form.name}</button>
    </div>
  );
}

export default App;
```

#### 7.组建的样式处理

1.行内样式  

2.class类名控制

```js
//导入样式
import "./index.css";
const style = {
  color: "red",
  fontsize: "50px",
};
function App() {
  return (
    <div className="App">
      {/*行内样式 */}
      {/*<span style={{ color: "red", fontsize: "50px" }}>this is a span</span>*/}
      <span style={style}>this is a span</span>

      {/*通过类名控制 */}
      <span className="foo">this ia a class foo</span>
    </div>
  );
}

export default App;
```

