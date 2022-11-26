// import {useMediaQuery, useTheme } from "@mui/material";

import React, { useEffect } from "react";
import { Link, useHref } from "react-router-dom";
import ThemeToggle from "../shared/components/ThemeToggle";
import { setIsLoading } from "../../components/linearProgress/linearProgressSlice";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { setIsNavBarSHow } from "../shared/actions/themeMoodSlice";

const Home = () => {
  const dispatch = useDispatch();
  const href = useHref();
  useEffect(() => {
    dispatch(setIsNavBarSHow(href));
  }, [dispatch, href]);

  dispatch(setIsLoading(false)); //loading
  //   const theme = useTheme();
  //   const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <Box sx={{ mt: "64px" }}>
        <ThemeToggle />
        <Link to="/result">Result</Link>
        <Link to="/login">Login</Link>
      </Box>
    </React.Fragment>
  );
};

export default Home;
