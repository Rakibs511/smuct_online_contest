import Grid from "@mui/material/Unstable_Grid2";
import { useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import Design from "./components/Design";
import Form from "./components/Form";
import { useHref } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsNavBarSHow } from "../shared/actions/themeMoodSlice";

const Login = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const href = useHref();
  useEffect(() => {
    dispatch(setIsNavBarSHow(href));
  }, [dispatch, href]);
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const rightSide = { backgroundColor: "secondary.main", height: "100vh" };
  const leftSide = { backgroundColor: "primary.main", height: "100vh" };
  return (
    <>
      <Grid container sx={leftSide}>
        <Grid xs={12} md={4}>
          {mediumScreen ? <Design /> : <Form />}
        </Grid>
        <Grid xs={12} md={8} sx={rightSide}>
          {mediumScreen ? <Form /> : <Design />}
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
