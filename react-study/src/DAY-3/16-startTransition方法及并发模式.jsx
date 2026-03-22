// startTransition方法是并发模式的一种实现方式，
// 并发模式的意思是：在组件更新时，可以继续执行其他操作，不会阻塞组件的更新
// startTransition 函数可以将 state 更新标记为 transition。
import {useState} from "react";
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
        //2.紧急
        setQuery(e.target.value)
    }
return(
    <div>
        <input type="text" value={search} onChange={handleChange}/>
        <List query={query}/>
    </div>
)
}
export default App
