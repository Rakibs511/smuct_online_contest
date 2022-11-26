import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    isLoading:false
}

const linearProgressSlice = createSlice({
  name: "linearProgress",
  initialState,
  reducers:{
    setIsLoading:(state,action)=>{
        state.isLoading=action.payload;
    }
  }
});

export const {setIsLoading} =linearProgressSlice.actions;
export default linearProgressSlice.reducer;