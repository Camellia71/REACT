// import { useState, useEffect, useCallback } from "react";

//在useEffect外部定义函数，存在闭包问题，会导致useEffect重复执行
// function App() {
//     const [count,setCount] = useState(0)
//     const [msg,setMsg]=useState('')
//         const foo=useCallback(()=>{
//             console.log(count)
//         },[count])
//     //useCallback:用于在组件中定义函数,并将其作为依赖项传递给useEffect;
//     // 使用它可以避免在每次渲染时都重新定义函数,从而导致useEffect重复执行
//     useEffect(()=>{
//         foo()
//     },[foo])
//     //Object.is(1,1) true;   Object.is(function(){},function(){}) false
//     //函数是引用类型,看内存地址,所以不会相等
//     return(
//         <div>
//             hello,App

//         </div>
//     )
// }
// export default App

import { useState, useEffect } from "react";

//在useEffect中定义函数，不会存在闭包问题
function App() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        const foo=()=>{
            console.log(count)
            setCount(count+1)
        }
        foo()   
    },[count])
    return(
        <div>
            hello,App
        </div>
    )
}
export default App