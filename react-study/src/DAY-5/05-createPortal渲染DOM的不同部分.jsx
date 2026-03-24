// createPortal允许将一些子元素渲染到DOM的不同部分，可以使用portal渲染模态对话框，或将react组件渲染到非DOM节点

import {createPortal} from "react-dom";
function App() {
    return(
        <div>
            hello App
        {createPortal(<p>hello p</p>, document.querySelector("body"))}
        </div>
    )
}
export default App