import {useReducer} from "react";
import {ListContext,ListDispatchContext} from "./13-0-ListContext";
function listReducer(state,action){
    switch(action.type) {
        case 'add':
            return [...state,{id:Date.now(),text:action.text||'ddd'}]
        case 'edit':
            return state.map((item)=>{
                if(item.id===action.id){
                    return {...item,text:'new'+item.text}
                }
                return item
            })
        case 'remove':
            return state.filter((item)=>item.id!==action.id)
        default:
            return state
    }
}
function ListProvider({children}) {
    const [list,listDispatch]=useReducer(listReducer,[
    {id:1,text:'aaa'},
    {id:2,text:'bbb'},
    {id:3,text:'ccc'}
])
    return(
        <ListContext.Provider value={list}>
            <ListDispatchContext.Provider value={listDispatch}>
                {children}
            </ListDispatchContext.Provider>
        </ListContext.Provider>
    )
}
export default ListProvider
