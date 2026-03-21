import {ListDispatchContext,ListContext} from "./13-0-ListContext";
import {useContext} from "react";
function ListContent() {
    const list = useContext(ListContext)
    const listDispatch=useContext(ListDispatchContext)
    return (
<ul>
    {list.map((item)=>{
        return (
            <li key={item.id}>{item.text}
            <button onClick={()=>listDispatch({type:'edit',id:item.id})}>编辑</button>
            <button onClick={()=>listDispatch({type:'remove',id:item.id})}>删除</button>
            </li>
        )
    })}
    </ul>
    )
}
export default ListContent
