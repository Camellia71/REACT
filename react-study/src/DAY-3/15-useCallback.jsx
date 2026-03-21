import {memo,useMemo,useState,useLayoutEffect,useCallback} from "react";

const Head=memo(function Head() {
  const [randomNum, setRandomNum] = useState(0);
  
useLayoutEffect(() => {
  setRandomNum(Math.random());
}, []);

    return (
        <div>{randomNum}</div>
    )
})
function App() {
    const [count,setCount]=useState(0)
    const [msg,_setMsg]=useState('hello react')
    // const fn = useMemo(()=>()=>{console.log(msg)},[msg])
    //简化useMemo的写法,使用useCallback函数
    const fn = useCallback(()=>{console.log(msg)},[msg])
    const handleClick=()=>{
        setCount(count+1)
    }
    return (
        <div>
            hello App
            <button onClick={handleClick}>点击</button>
            <Head list={fn}/>
        </div>
    )
}
export default App