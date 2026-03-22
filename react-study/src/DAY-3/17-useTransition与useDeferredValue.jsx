//useTransition与useDeferredValue
//useTransition：将 state 更新标记为 transition。

// import {useState,useTransition} from "react";
// function List({query}) {
// const items=[]
// const word='hello world'
// if(query!==''&&word.includes(query) ) {
//     const arr = word.split(query)
//     for(let i = 0;i<50000;i++){
//         items.push(<li key={i}>{arr[0]}<span style={{color:'red'}}>{query}</span>{arr[1]}</li>)
//     }
// }
// else{
// for(let i = 0;i<50000;i++){
//     items.push(<li key={i}>{word}</li>)
// }    
// }
// return(
//     <ul>
//         {items}
//     </ul>
// )
// }
// function App() {
//     const [search,setSearch]=useState('')
//     const [query,setQuery]=useState('')
//     const [pending,startTransition]=useTransition()
//     const handleChange=(e)=>{
//         //1.紧急
//         setSearch(e.target.value)
//         //2.紧急:现在会在整个输入完之后才显示（原因：默认是同步更新，也就是说在1执行的时候，2同步执行），
//         // setQuery(e.target.value)
//         // 如果想让它在输入时就显示，需要使用startTransition方法
//         //非紧急：
//         startTransition(()=>{
//             setQuery(e.target.value)
//         })
//     }
// return(
//     <div>
//         <input type="text" value={search} onChange={handleChange}/>
//         {pending&&<div>loading...</div>}
//         <List query={query}/>
//     </div>
// )
// }
// export default App


//useDeferredValue：将 state 更新标记为 deferred。
import {useState,useDeferredValue} from "react";
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
    //useDeferredValue：将 state 更新标记为 deferred。
    //也就是说得到一个对应search的延迟值，跟search同样，只不过是延迟的副本
    const query=useDeferredValue(search)
    const handleChange=(e)=>{
        //1.紧急
        setSearch(e.target.value)
    }
return(
    <div>
        <input type="text" value={search} onChange={handleChange}/>
        <List query={query}/>
    </div>
)
}
export default App