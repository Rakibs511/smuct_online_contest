import { Avatar, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOutHandle = () => {
    console.log("LogOut");
    handleClose();
  };
  return (
    <>
      <Avatar
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
        src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
      ></Avatar>
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
          to="/profile"
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={logOutHandle}
          sx={{
            bgcolor: "primary.main",
            ":hover": {
              bgcolor: "secondary.main",
            },
          }}
        >
          Log Out
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
