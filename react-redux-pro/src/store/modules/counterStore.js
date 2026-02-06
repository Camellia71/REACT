import {createSlice} from '@reduxjs/toolkit'
const counterStore = createSlice({
    name:'counter',
    //初始化state
    initialState:{
        count :0
    },
    //修改状态的方法，同步方法支持直接修改
  reducers:{
    increment(state) {
        state.count++
    },
    decrement (state) {
        state.count--
    },
    addToNum(state,action) {
        state.count=action.payload
    }
  }
})
//解构出来actionCreater函数
const {increment,decrement,addToNum}=counterStore.actions
//获取reducer函数
const reducer=counterStore.reducer
//导出actionCreater函数和reducer函数
export{increment,decrement,addToNum} 
export default reducer