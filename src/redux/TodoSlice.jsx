import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getTodo = createAsyncThunk('getTodo', async()=> {
    const response = await axios.get('https://dummyjson.com/todos')
    return response.data
})

const TodoSlice = createSlice({
    name : "todo",
    initialState : {
        data : [],
        isloading : false,
        error : ""
    },
    reducers : {},
    extraReducers : (builder) =>
    {builder.addCase(getTodo.pending ,(state,action)=>{
        state.isloading = true,
        state.error = ''
        
    })
    builder.addCase(getTodo.fulfilled,(state,action)=>{
        state.isloading = false
        state.error = ''
        state.data = action.payload
    }
    )
    builder.addCase(getTodo.rejected , (state,action)=>{
        state.isloading = false,
        state.error = 'error'

    })
},
    
})

export const todoSliceActions = TodoSlice.actions;
export default TodoSlice;