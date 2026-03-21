//当组件更新或者卸载时，要做好清理工作

import { useEffect } from "react";
function App() {
    useEffect(() => {
  const timer = setInterval(() => {
    console.log('定时器执行');
  }, 1000);

  // 清理函数：组件卸载时清除定时器
  //useEffect的清理工作：1.卸载组件的时候  2.下一次更新之前清理当前作用域
  return () => {
    clearInterval(timer);
    console.log('清理工作完成');
  };
}, []);
return (
    <div>
        hello,App
    </div>
)
}
export default App