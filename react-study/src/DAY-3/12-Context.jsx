//跨组件通信
import { createContext,useContext,useState } from "react";
//参数是默认值
const Context=createContext(0)
function App() {
    //改变后的值也能传递给子组件
    const [count,setCount]=useState(123)
    const handleClick=()=>{
        setCount(count+1)
    }
    return (
        <div>
            hello App
            <button onClick={handleClick}>点击</button>
            {/* //只能通过value传递数据 */}
            <Context.Provider value={count}>
            <Head />
            </Context.Provider>
        </div>
    )
}
function Head() {
    return (
        <div>
            hello Head
            <Title />
        </div>
    )
}
function Title() {
    const value=useContext(Context)
    return (
        <div>
            hello Title {value}
        </div>
    )
}
export default App