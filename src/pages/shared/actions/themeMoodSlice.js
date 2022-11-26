import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMood: false,
  isNavBarSHow: null,
};

const themeMoodSlice = createSlice({
  name: "themMood",
  initialState,
  reducers: {
    setIsDarkMood: (state, action) => {
      state.isDarkMood = action.payload;
    },
    setIsNavBarSHow: (state, action) => {
      state.isNavBarSHow = action.payload;
    },
  },
});

export const { setIsDarkMood, setIsNavBarSHow } = themeMoodSlice.actions;
export default themeMoodSlice.reducer;
