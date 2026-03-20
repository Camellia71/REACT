import "./04-全局样式.css";
import "./06-sass.scss";
//引入局部样式需要命名;其实是模块化开发需要的一环，脚手架会将局部样式编译成为特殊形式，避免冲突
//编译的原理是什么？就是在局部样式的类名后面加上一个随机字符串，保证每个类名都是唯一的，这样就不会发生冲突了
import style from "./05-局部样式.module.css";
function App() {
  //现在这里写的就是开发的代码，不是浏览器能识别的代码，vite脚手架的功能就是做这个转换
  const myStyle = { width: "100px", height: "100px", background: "red" };
  return (
    <>
      <div style={myStyle}>hello app</div>
      <div className="box"></div>
      <div className={style.box2}>局部样式</div>
      {/* 如果想用驼峰法来表示，就要用vite脚手架中的能力，这个需要到vite.config.js中配置 */}
      <div className={style["head-title"]}>带短线的局部样式</div>
      <div className={style["head-title-icon"]}>带短线的局部样式图标</div>
    </>
  );
}
export default App;
