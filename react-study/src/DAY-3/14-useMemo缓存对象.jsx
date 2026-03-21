import {memo,useMemo,useState,useLayoutEffect} from "react";

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
    const list = useMemo(()=>[msg.toLowerCase(),msg.toUpperCase()],[msg])
    const handleClick=()=>{
        setCount(count+1)
    }
    return (
        <div>
            hello App
            <button onClick={handleClick}>点击</button>
            <Head list={list}/>
        </div>
    )
}
export default App