//flushSync同步刷新DOM元素，通俗来说，就是等组件更新完成后再刷新DOM元素，而不是异步刷新DOM元素
//目的是找到一个时机，在这个时机之前，组件的状态更新完成，但是DOM元素还没有更新，而在这个时机之后，组件的状态更新完成，DOM元素也更新完成
import {useState,useRef,flushSync} from "react";
function App() {
    const [count,setCount] =useState(0)
    const [count2,setCount2]=useState(0)
    const ref=useRef(null)
    const handleClick=()=>{
        // setCount(count+1)
        //希望在这里拿到更新后的DOM元素
                flushSync(()=>{
            setCount(count+1)
        })
        flushSync(()=>{
            setCount2(count2+10)
        })
        console.log(123)  //打印两次，因为flushSync是同步刷新DOM元素，这会执行两次，也就是说取消了react内部的自动批处理
        //自动批处理：react内部会自动将多个状态更新合并起来，只执行一次刷新，提高性能
        //flushSync会取消自动批处理，导致性能下降
        console.log(ref.current.innerHTML)
    }
    return (
        <div>hello App
            <button onClick={handleClick}>点击</button>
            <div ref={ref}>{count},{count2}</div>
        </div>
    )
}
export default App
