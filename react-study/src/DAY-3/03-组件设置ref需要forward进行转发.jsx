import {useRef,forwardRef} from 'react'
const MyInput=forwardRef(
    function MyInput(props,ref) {
    return (
        <imput type='text' ref={ref}/>
    )
}
)
function App() {
    const ref=useRef(null)
    const handleClick=() =>{
        ref.current.focus()
        ref.current.style.background='red'
    }
    return (
        <div>
            <button onClick={handleClick}>点击</button>
            <MyInput myRef={ref}/>
        </div>
    )
}
export default App
// 1. App 组件创建 ref
//    └─ useRef(null) → ref 对象

// 2. ref 通过 props 传递给 MyInput
//    └─ <MyInput myRef={ref} />

// 3. forwardRef 接收 ref 并绑定到 DOM
//    └─ <input type='text' ref={ref} />

// 4. 点击按钮时操作 DOM
//    └─ ref.current → <input> 元素
//    └─ focus() → 聚焦
//    └─ style.background = 'red' → 变红