//使用useImperativeHandle暴露ref

// 1. App 创建 ref
//    └─ useRef(null)

// 2. ref 通过 forwardRef 传递给 MyInput
//    └─ forwardRef((props, ref) => {...})

// 3. useImperativeHandle 自定义暴露内容
//    └─ 只暴露 focusAndStyle 方法

// 4. 父组件调用自定义方法
//    └─ ref.current.focusAndStyle()
//    └─ 内部操作 inputRef.current

import {useRef,forwardRef,useImperativeHandle} from 'react'
const MyInput=forwardRef(
    function MyInput(props,ref) {
        const inputRef=useRef(null)
        useImperativeHandle(ref,()=>{
            return{
                focus:inputRef.current.focus,
                style:inputRef.current.style
            }
        },[inputRef])
    return (
        <input type='text' ref={inputRef}/>
    )
}
)
function App() {
    const ref=useRef(null)
    const handleClick=() =>{
        // const ret=ref.current.focus()
        // console.log(ret)
        // ref.current.style.background='red'
        ref.current.focusAndStyle()
        //这个方法就是上方useImperativeHandle函数return的方法
    }
    return (
        <div>
            <button onClick={handleClick}>点击</button>
            <MyInput ref={ref}/>
        </div>
    )
}
export default App