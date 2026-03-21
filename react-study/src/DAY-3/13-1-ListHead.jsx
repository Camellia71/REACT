import {ListDispatchContext,ListContext} from "./13-0-ListContext";
import {useContext,useState} from "react";
function ListHead() {
    const listDispatch=useContext(ListDispatchContext)
    const [text,setText]=useState('')
    return (
        <>    
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>{listDispatch({type:'add',text});setText('')}}>添加</button>
        </>
    )
}
export default ListHead
