import { Button, MenuItem, Menu } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        sx={{
          bgcolor: "secondary.main",
          color: "text.primary",
          mr: "10px",
          ":hover": { bgcolor: "secondary.main" },
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Main
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            bgcolor: "primary.main",
            ":hover": {
              bgcolor: "secondary.main",
            },
          }}
          component={Link}
          to="/registration"
        >
          Registration
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            bgcolor: "primary.main",
            ":hover": {
              bgcolor: "secondary.main",
            },
          }}
          component={Link}
          to="CreateProblem"
        >
          Create Problem
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            bgcolor: "primary.main",
            ":hover": {
              bgcolor: "secondary.main",
            },
          }}
          component={Link}
          to="/ViewSolved"
        >
          View Solved
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            bgcolor: "primary.main",
            ":hover": {
              bgcolor: "secondary.main",
            },
          }}
          component={Link}
          to="/AllUser"
        >
          All User
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            bgcolor: "primary.main",
            ":hover": {
              bgcolor: "secondary.main",
            },
          }}
          component={Link}
          to="/CreateAccount"
        >
          Create account
        </MenuItem>
      </Menu>
    </>
  );
};

export default Main;
