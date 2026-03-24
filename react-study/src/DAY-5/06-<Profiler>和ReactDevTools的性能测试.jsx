//<Profiler>能以编程的方式进行性能测试
import { useState } from "react";
import { Profiler } from "react";
function Head({count}) {
    return <div>Hello, Head!
        {count}
    </div>;
}
function  App() {
    const [count,setCount] =useState(0);
    const onRender=(id,phase,actualDuration,baseDuration,element)=>{
        console.log(id,phase,actualDuration,baseDuration,element);
    }
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>点击</button>
            <Profiler id="Head" onRender={onRender}>
                <Head count={count} />
            </Profiler>
            {count}
        </div>
    )
}
export default App