// 不使用reducer,直接使用useState来实现状态管理集合
// import { useState } from "react";
// function App() {
//     const [list,setList]=useState([
//     {id:1,text:'aaa'},
//     {id:2,text:'bbb'},
//     {id:3,text:'ccc'}
// ])
// const handleAdd=()=>{
//     setList([...list,{id:list.length+1,text:'ddd'}])
// }
// const handleEdit=(id)=>{
//     setList(
//         list.map((item)=>{
//             if(item.id===id) {
//                 return ([...list,{id:4,text:'ddd'}])
//             }
//             else{
//                 return item
//             }
//         })
//     )
// }
// const handleRemove=(id)=>{
//         setList(
//         list.filter((item)=>{
//             if(item.id===id) {
//                 return false
//             }
//             else{
//                 return true
//             }
//         })
//     )
// }
// return (
//  <div>
//     hello App
//     <input type="text" />
//     <button onClick={()=>handleAdd()}>添加</button>
//     <ul>
//     {list.map((item)=>{
//         return (
//             <li key={item.id}>{item.text}
//             <button onClick={()=>handleEdit(item.id)}>编辑</button>
//             <button onClick={()=>handleRemove(item.id)}>删除</button>
//             </li>
//         )
//     })}
//     </ul>
//  </div>   
// )
// }
// export default App

// //reducer:统一的状态管理集合
// import { useReducer } from "react";
// //由这个函数完成外部逻辑的处理
// function listReducer(state,action){
//     switch(action.type) {
//         case 'add':
//             return [...state,{id:state.length+1,text:'ddd'}]
//         case 'edit':
//             return state.map((item)=>{
//             if(item.id===action.id) {
//                 return ([...item,{id:4,text:'ddd'}])
//             }
//             else{
//                 return item
//             }
//         })
//         case 'remove':
//             return state.filter((item)=>{
//             if(item.id===action.id) {
//                 return false
//             }
//             else{
//                 return true
//             }
//         })
//     }
// }
// function App() {
//     const [list,dispatch]=useReducer(listReducer,[
//     {id:1,text:'aaa'},
//     {id:2,text:'bbb'},
//     {id:3,text:'ccc'}
// ])

// return (
//  <div>
//     hello App
//     <input type="text" />
//     <button onClick={()=>dispatch({type:'add'})}>添加</button>
//     <ul>
//     {list.map((item)=>{
//         return (
//             <li key={item.id}>{item.text}
//             <button onClick={()=>dispatch({type:'edit',id:item.id})}>编辑</button>
//             <button onClick={()=>dispatch({type:'remove',id:item.id})}>删除</button>
//             </li>
//         )
//     })}
//     </ul>
//  </div>   
// )
// }
// export default App

//useImmerReducer:统一的状态管理集合
import { useImmerReducer } from "immer";
//由这个函数完成外部逻辑的处理
function listReducer(draft,action){
    switch(action.type) {
        case 'add':
            draft.push({id:draft.length+1,text:'ddd'})
            break;
        case 'edit':
            var value = draft.find((item)=>item.id===action.id);
            value.text='new'+value.text
            break
        case 'remove':
            const index=draft.findIndex((item)=>item.id===action.id); // eslint-disable-line no-case-declarations
            draft.splice(index,1)
            break
    }
}
function App() {
    const [list,dispatch]=useImmerReducer(listReducer,[
    {id:1,text:'aaa'},
    {id:2,text:'bbb'},
    {id:3,text:'ccc'}
])

return (
 <div>
    hello App
    <input type="text" />
    <button onClick={()=>dispatch({type:'add'})}>添加</button>
    <ul>
    {list.map((item)=>{
        return (
            <li key={item.id}>{item.text}
            <button onClick={()=>dispatch({type:'edit',id:item.id})}>编辑</button>
            <button onClick={()=>dispatch({type:'remove',id:item.id})}>删除</button>
            </li>
        )
    })}
    </ul>
 </div>   
)
}
export default App