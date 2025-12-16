//项目的根组件：被引入index.js，在public/index.html中渲染

//REACT中获取DOM
import {useRef} from 'react'
//1.使用useRef创建ref对象，并与JSX绑定
//2.在DOM可用时，通过inputRef.current拿到DOM对象
//渲染完毕之后 dom生成之后才可用

function App() {
  const inputRef=useRef(null)
  const showDom = ()=>{
    console.log(inputRef.current)
  }
  return (
    <div className="App">
      <input type="text" ref={inputRef}></input>
      <button onClick={showDom}>获取DOM</button>
    </div>
  );
}

export default App;
