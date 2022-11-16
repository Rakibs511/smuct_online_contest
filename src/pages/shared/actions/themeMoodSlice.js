import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    isDarkMood:false
}

const themeMoodSlice=createSlice({
    name:'themMood',
    initialState,
    reducers:{
        setIsDarkMood:(state,action)=>{
            state.isDarkMood=action.payload
        }
    }
})

export const {setIsDarkMood}=themeMoodSlice.actions;
export default themeMoodSlice.reducer;