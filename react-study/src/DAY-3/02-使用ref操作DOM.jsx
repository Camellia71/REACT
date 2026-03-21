// import {useRef} from 'react'
// function App() {
//     const myRef = useRef(null)
//     const handleClick=() =>{
//         //通过ref操作DOM元素
//         console.log(myRef.current.innerHTML)
//         myRef.current.style.color='red'
//     }
//     return (
//         <div>
//             hello App
//             <button onClick = {handleClick}>点击</button>
//             <div ref={myRef}>hello react</div>
//         </div>
//     )
// }
// export default App

// import {useRef} from 'react'
function App() {
 const list = [
    {id:1,name:'aaa'},
    {id:2,name:'bbb'},
    {id:3,name:'ccc'},
 ]
    return (
        <div>
            hello App
            <ul>
                {list.map((item) => {
                    return < li key={item.id} ref={(myRef)=>myRef.style.background='red'}>{item.name}</li>
})}
            </ul>
     </div>
    )
}
export default App