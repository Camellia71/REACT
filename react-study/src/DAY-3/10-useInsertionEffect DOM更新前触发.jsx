// useInsertionEffect:在DOM更新前触发副作用操作;因为获取不到元素，所以只在css in js中使用
import { useInsertionEffect } from "react";
function App() {

  useInsertionEffect(() => {
    // 在DOM更新前插入动态样式
    const styleTag = document.createElement('style');
    styleTag.textContent = `
      .dynamic-box {
        background-color: #1890ff;
        color: white;
        padding: 20px;
        border-radius: 8px;
      }
    `;
    document.head.appendChild(styleTag);
    
    // 清理函数
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="dynamic-box">
      <h2>useInsertionEffect 示例</h2>
      <p>这个组件的样式是通过 useInsertionEffect 在 DOM 更新前插入的</p>
    </div>
  );

}
export default App
