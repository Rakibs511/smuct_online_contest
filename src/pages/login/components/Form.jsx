import { Button, Stack, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import smuct_logo from "../../../assets/pictures/smuct.svg";

const Form = () => {
  const theme = useTheme();
  return (
    <from>
      <Stack
        component={"form"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ height: "100%", weight: "100%" }}
      >
        <img
          src={smuct_logo}
          alt="Not Found Logo"
          style={{
            width: "40%",
            backgroundColor: "#ffffffa5",
            padding: "10px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            color: "text.secondary",
            fontWeight: "bold",
            marginBottom: "100px",
            [theme.breakpoints.down("md")]: {
              // fontSize:'15px'
            },
          }}
        >
          SMUCT Online Contest
        </Typography>
        <Typography
          variant="h5"
          sx={{
            backgroundColor: "secondary.main",
            width: "210.4px",
            padding: "3px 0px",
            textAlign: "center",
            borderRadius: "5px",
            color: "text.primary",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Login
        </Typography>

        <TextField
          size="small"
          label="User ID"
          sx={{
            borderColor: "red",
            marginBottom: "10px",
            "& label.Mui-focused": {
              color: "text.secondary",
            },
            "&:hover fieldset": {
              borderColor: "text.primary",
            },
          }}
        />

        <TextField
          type={"password"}
          size="small"
          label="Password"
          sx={{
            borderColor: "red",
            marginBottom: "20px",
            "& label.Mui-focused": {
              color: "text.secondary",
            },
            "&:hover fieldset": {
              borderColor: "text.primary",
            },
          }}
        />
        <Button
          sx={{
            width: "210.4px",
            color: "otherColor.main",
            backgroundColor: "secondary.main",
            ":hover": { backgroundColor: "secondary.main" },
          }}
        >
          Submit
        </Button>
        <Link to="/">Home Page</Link>
      </Stack>
    </from>
  );
};

export default Form;
