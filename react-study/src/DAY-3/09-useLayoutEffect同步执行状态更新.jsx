//useEffect是在渲染被绘制到屏幕之后执行的，是异步的；
//useLayoutEffect是在渲染之后，被绘制到屏幕之前执行的，是同步的；

import { useState, useRef, useLayoutEffect } from "react";
// 但操作需要处理DOM，并且会改变页面样式时，就使用useLayoutEffect，否则可能出现闪屏问题
//因为异步的会先于同步的执行，如果触发太多次或操作复杂度高，所以会导致闪屏问题

function App() {
    // useLayoutEffect示例：在DOM更新后同步测量元素尺寸，避免闪屏
const [width, setWidth] = useState(0);
const divRef = useRef(null);

useLayoutEffect(() => {

    // 同步测量DOM元素宽度，在绘制前完成
    if (divRef.current) {
        const { width } = divRef.current.getBoundingClientRect();
        setWidth(width);
    }
}, []);
    return (
        <div ref={divRef}>
            hello,App
        {width}
        </div>
    )
}
export default App