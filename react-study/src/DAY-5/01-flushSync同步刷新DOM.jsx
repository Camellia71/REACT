//flushSync同步刷新DOM元素，通俗来说，就是等组件更新完成后再刷新DOM元素，而不是异步刷新DOM元素
import {useState,useRef,flushSync} from "react";
function App() {
    const [count,setCount] =useState(0)
    const ref=useRef(null)
    const handleClick=()=>{
        // setCount(count+1)
        //希望在这里拿到更新后的DOM元素
                flushSync(()=>{
            setCount(count+1)
        })
        console.log(ref.current.innerHTML)
    }
    return (
        <div>hello App
            <button onClick={handleClick}>点击</button>
            <div ref={ref}>{count}</div>
        </div>
    )
}
export default App
