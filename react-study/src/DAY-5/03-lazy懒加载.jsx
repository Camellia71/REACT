//懒加载：当组件在需要时才加载，而不是在页面加载时就加载
//lazy能够让你在组件第一次被渲染之前延迟加载组件，这可以提高页面的加载速度
//<Suspense>允许显示回退内容，直到组件加载完成

// import MyHead from "./04-MyHead.jsx ";
import {useState,lazy,Suspense} from "react";
const MyHead = lazy(() => import("./04-MyHead.jsx"));
//import动态使用会返回一个Promise对象，Promise对象解析后返回组件的实例
function App() {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            hello App
            <button onClick={() => setIsShow(true)}>切换</button>
            {/* Suspense组件：在没有加载完组件时，显示回退内容 */}
            <Suspense fallback={<div>加载中...</div>}>
                {isShow && <MyHead />}
            </Suspense>
        </div>
    )
}
export default App