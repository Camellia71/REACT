import classNames from "classnames";
import style from "05-局部样式.module.css";
//只用字符串非常不灵活，所以引入classnames库，能够根据条件动态的添加类名，返回一个字符串
function App() {
  // const myClass = ['box1','box2']
  const myClass = classNames({
    box1: true,
    box2: true,
    box3: false,
    //加入局部样式
    [style.headTitle]: true,
  });

  {
    /* 方法1 使用数组进行代替 */
  }
  {
    /* // return（
    <div className={myClass.join(" ")}>hello app</div>;） */
  }

  {
    /* 安装classnames库，npm install classnames；能够 */
  }

  return (
    <>
      <div className={myClass}>hello app</div>
    </>
  );
}
export default App;
