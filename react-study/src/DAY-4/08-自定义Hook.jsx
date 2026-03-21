// // 自定义Hook是一种特殊类型的函数，用于封装和复用React组件的逻辑。函数内部可以调用其他Hook函数，且以use开头。
// import { useState, useEffect } from "react";
// function useMouse() {
//     const [state,setState] = useState({
//         pageX:NaN,
//         pageY:NaN
//     })
//     //useEffect:用于在组件挂载和卸载时执行副作用操作;简单来讲,就是组件挂载时执行,组件卸载时执行，
//     // 挂载的意思是组件第一次渲染时执行,卸载的意思是组件从DOM中移除时执行
//     useEffect(()=>{
//         function handleMouseMove(e){
//             setState({
//                 pageX:e.pageX,
//                 pageY:e.pageY
//             })
//         }
//         document.addEventListener('mousemove',handleMouseMove)
//         return ()=>{
//             document.removeEventListener('mousemove',handleMouseMove)
//         }
//     },[])
//     return state
// }
// function App() {
//     const mouse =useMouse();
//   return (
//     <div>
//       <h1>Hello, World!
//         {mouse.pageX},{mouse.pageY}
//       </h1>
//     </div>
//   );
// }

// export default App;

//使用第三方hooks库
//直接使用ahooks的useMouse
import { useMouse } from "ahooks";
function App() {
    const mouse =useMouse();
  return (
    <div>
      <h1>Hello, World!
        {mouse.pageX},{mouse.pageY},
        {/* //相对于可视区的坐标 */}
        {mouse.clientX},{mouse.clientY}
      </h1>
    </div>
  );
}

export default App;