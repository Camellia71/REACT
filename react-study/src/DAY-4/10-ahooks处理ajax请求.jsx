import { useRequest } from "ahooks";
import { useState } from "react";
import axios from "axios";
async function getData() {
    const res=await  axios.get('./cartData.json')
    return res.data.list
} 
function App() {
    const [data,setData]=useState([])
    const {run,error,loading,refresh}=useRequest(getData,{
        manual:true,
        onSuccess:(ret,params)=>{
            console.log(params)
            setData(ret)
        }
    })
      if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
    return (
        <div>
            <h1>Hello, World!</h1>
            <button onClick={()=>{run(123,456)}}>点击</button>
            <button onClick={()=>{refresh()}}>刷新</button>
            {data.map((item)=><li key={item.id}>{item.title}</li>)}
        </div>
    )
}
export default App