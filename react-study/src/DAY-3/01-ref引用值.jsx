// import {useState} from 'react'
// function App() {
//     const [count,setCount] = useState(0)
//     let num= 0
//     const handleClick = ()=>{
//         setCount(count+1)
//         num++
//         console.log(num)
//     }
//     return (
//         <div>
//             <h1>Hello, World!</h1>
//             <br/>
//             <button onClick = {handleClick}>计数</button>
//             <br/>
//             {count}
//         </div>
//     )
// }
// export default App

//useRef:用于创建一个可变的引用值,在组件的生命周期内保持不变;简单来说就是记忆普通变量
import {useState,useRef} from 'react'
function App() {
    const [count,setCount] = useState(0)
    let num= useRef(0)
    //useRef返回的是一个对象,对象中有一个current属性,属性值就是我们传入的参数
    const handleClick = ()=>{
        setCount(count+1)
        num.current++
        console.log(num.current)
    }
    return (
        <div>
            <h1>Hello, World!</h1>
            <br/>
            <button onClick = {handleClick}>计数</button>
            <br/>
            {count}
        </div>
    )
}
export default App
//useRef和useState的区别:
//useRef:用于创建一个可变的引用值,在组件的生命周期内保持不变;简单来说就是记忆普通变量
//useState:用于创建一个可变的状态值,在组件的生命周期内保持不变;简单来说就是记忆普通变量
//返回值:
//useRef:返回的是一个对象,对象中有一个current属性,属性值就是我们传入的参数
//useState:返回的是一个数组,数组中第一个元素是状态值,第二个元素是设置状态值的函数
//重新渲染:
//useRef:不会重新渲染组件,因为引用值不会改变
//useState:会重新渲染组件,因为状态值会改变
//是否能在渲染过程之外修改或更新:
//useRef:能修改或更新current属性值
//useState:不能修改或更新状态值,只能通过设置状态值的函数来更新state
//注意:
//useRef和useState都可以在组件的生命周期内使用,但是useRef只能在组件的生命周期内使用,而useState只能在组件的挂载和卸载时使用
//关于挂载和卸载，通俗的理解就是:
//挂载:组件第一次渲染时执行
//卸载:组件从DOM中移除时执行，从DOM中移除的意思是组件从页面中移除