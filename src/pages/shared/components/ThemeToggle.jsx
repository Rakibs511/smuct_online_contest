import React from "react";
import { motion } from "framer-motion";
import { Switch } from "@mui/material";
import { setIsDarkMood } from "../actions/themeMoodSlice";
import { useDispatch } from "react-redux";
const ThemeToggle = () => {
  const dispatch = useDispatch();
  //   const isDarkMood = useSelector(
  //     (state) => state.themeMoodSlice.isDarkMood
  //   );
  const isDark = localStorage.getItem("dm");
  dispatch(setIsDarkMood(isDark === "true" ? true : false));
  return (
    <motion.div drag style={{ backgroundColor: "red", width: "70px" }}>
      <Switch
        color="secondary"
        defaultChecked={isDark === "true" ? true : false}
        onChange={(e) => {
          //! react and mui warning here ! thats not can be any problem for us
          dispatch(setIsDarkMood(e.target.checked));
          localStorage.setItem("dm", e.target.checked);
        }}
      />
    </motion.div>
  );
};

export default ThemeToggle;
