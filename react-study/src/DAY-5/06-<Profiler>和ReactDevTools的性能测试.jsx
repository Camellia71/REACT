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
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>点击</button>
            <Profiler id="Head">
                <Head count={count} />
            </Profiler>
            {count}
        </div>
    )
}
export default App