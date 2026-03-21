//useEffect函数的作用是:在组件挂载和卸载时执行副作用操作
//在react中，事件操作是可以处理副作用的
//副作用是函数在执行过程中和外部环境交互的操作，比如修改DOM、发送请求、订阅事件等

import {useRef,useEffect} from 'react'    
function App() {
    const ref=useRef(null)
    //副作用：不符合纯函数的规范
    // setTimeout(()=>{
    //     ref.current.focus()
    // },1000)

    const handleClick=() =>{
        //副作用：符合规范，因为事件是可以处理副作用的
        ref.current.focus()
    }
    //可以在初始的时候进行副作用操作
    //useEffect是会等return的jsx处理完成之后才执行的，在渲染页面完成之后执行副作用操作
    useEffect(()=>{
        ref.current.focus()
    })
    return (
        <div>
            hello App
            <button onClick={handleClick}>点击</button>
            <input type='text' ref={ref}/>
        </div>
    )
}
export default App
