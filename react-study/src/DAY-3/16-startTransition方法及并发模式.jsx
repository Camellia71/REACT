// startTransition方法是并发模式的一种实现方式，
// 并发模式的意思是：在组件更新时，可以继续执行其他操作，不会阻塞组件的更新
// startTransition 函数可以将 state 更新标记为 transition。
import {useState,startTransition} from "react";
function List({query}) {
const items=[]
const word='hello world'
if(query!==''&&word.includes(query) ) {
    const arr = word.split(query)
    for(let i = 0;i<50000;i++){
        items.push(<li key={i}>{arr[0]}<span style={{color:'red'}}>{query}</span>{arr[1]}</li>)
    }
}
else{
for(let i = 0;i<50000;i++){
    items.push(<li key={i}>{word}</li>)
}    
}
return(
    <ul>
        {items}
    </ul>
)
}
function App() {
    const [search,setSearch]=useState('')
    const [query,setQuery]=useState('')
    const handleChange=(e)=>{
        //1.紧急
        setSearch(e.target.value)
        //2.紧急:现在会在整个输入完之后才显示（原因：默认是同步更新，也就是说在1执行的时候，2同步执行），
        // setQuery(e.target.value)
        // 如果想让它在输入时就显示，需要使用startTransition方法
        //非紧急：
        startTransition(()=>{
            setQuery(e.target.value)
        })
    }
return(
    <div>
        <input type="text" value={search} onChange={handleChange}/>
        <List query={query}/>
    </div>
)
}
export default App
