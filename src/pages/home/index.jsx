// import {useMediaQuery, useTheme } from "@mui/material";

import { Link } from "react-router-dom";
import ThemeToggle from "../shared/components/ThemeToggle";

const Home = () => {
  //   const theme = useTheme();
  //   const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <ThemeToggle />
      Home Page
      <Link to="/login">Login</Link>
    </>
  );
};

export default Home;
