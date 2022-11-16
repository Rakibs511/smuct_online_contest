import Grid from "@mui/material/Unstable_Grid2";
import { useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Design from "./components/Design";
import Form from "./components/Form";

const Login = () => {
  const theme = useTheme();
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
