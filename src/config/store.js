import { configureStore } from "@reduxjs/toolkit";
import linearProgressSlice from "../components/linearProgress/linearProgressSlice";
import themeMoodSlice from "../pages/shared/actions/themeMoodSlice";

export const store = configureStore({
    reducer: {
        themeMoodSlice,
        linearProgressSlice,
  },
});
