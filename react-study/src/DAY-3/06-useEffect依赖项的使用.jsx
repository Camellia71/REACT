import { useState, useEffect } from "react";

function App() {
    const [count,setCount]=useState(0)
    const [msg,setMsg]=useState('')
    //useEffect依赖项是通过数组来实现的,数组中可以放多个依赖项,每个依赖项之间用逗号隔开
    //初始的时候所有的useEffect都会执行一次,后续只有依赖项发生变化,才会执行
    //内部是通过Object.is(依赖项,依赖项)的判断来判断依赖项是否发生变化
    useEffect(()=>{
        console.log(count)
        console.log(msg)
    },[count,msg])
    //如果依赖项为空数组,则useEffect只会在组件挂载时执行一次,后续不会执行
        const handleClick=()=>{
        setCount(count+1)
        setMsg('hello useEffect')
    }
    //props，计算变量和state都可以作为依赖项
    return (
        <div>
            hello App
            <button onClick={handleClick}>点击</button>
        </div>
    )
}
export default App