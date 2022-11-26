import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import jwtDecode from "jwt-decode";
import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LinearProgress from "../../../components/linearProgress/LinearProgress";
import Main from "./Main";
import Profile from "./Profile";

const NavBar = () => {
  const [isTeacher, setIsTeacher] = useState(null);
  const isLoading = useSelector((state) => state.linearProgressSlice.isLoading);
  useLayoutEffect(() => {
    const authorization = localStorage.getItem("authorization").split(" ")[1];
    const decode = jwtDecode(authorization);
    setIsTeacher(decode.teacherId);
  }, [isTeacher]);
  //   console.log(isLoading);
  return (
    <>
      <AppBar>
        {isLoading && <LinearProgress />}
        <Toolbar>
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              flexGrow: 1,
              userSelect: "none",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            SMUCT
          </Typography>
          <Button
            variant="text"
            component={Link}
            to="/result"
            color="secondary"
            sx={{
              bgcolor: "secondary.main",
              color: "text.primary",
              mr: "10px",
              ":hover": { bgcolor: "secondary.main" },
            }}
          >
            Result
          </Button>
          <Button
            component={Link}
            to="/problems"
            variant="text"
            color="secondary"
            sx={{
              bgcolor: "secondary.main",
              color: "text.primary",
              mr: "10px",
              ":hover": { bgcolor: "secondary.main" },
            }}
          >
            Problems
          </Button>
          {isTeacher ? <Main /> : null}
          <Profile />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default React.memo(NavBar);
