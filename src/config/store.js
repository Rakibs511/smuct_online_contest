import { configureStore } from "@reduxjs/toolkit";
import themeMoodSlice from "../pages/shared/actions/themeMoodSlice";
export const store = configureStore({
  reducer: {
    themeMoodSlice,
  },
});
