import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import {
  Stack,
  TextField,
  Typography,
  useTheme,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import smuct_logo from "../../../assets/pictures/smuct.svg";
import axios from "axios";
import { dev } from "../../../config/config";

const Form = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [select, setSelect] = useState("");
  const [select_helperText, setSelect_helperText] = useState(null);
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  const [isError, setIsError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const loginInfoSubmitHandle = () => {
    if (select === "") {
      setSelect_helperText("Required*");
    } else {
        setIsError("bla bla test for hide password errorMessage")
      setIsLoading(true);
      setSelect_helperText(null);
      //?=========| Student Login Api call |===========
      select === 10 &&
        axios({
          method: "post",
          url: `${dev.url}/api/v1/students/login`,
          data: {
            studentId: id,
            password: password,
          },
        })
          .then((res) => {
            localStorage.setItem("authorization", res.data.token);
            if (res.data.success === true) {
              setIsLoading(false);
              navigate("/");
            }
            //   console.log(res);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsError(err.response.data.errors[0].param);
            setErrorMessage(err.response.data.errors[0].msg);
          });
      //   console.log(errorMessage, isError);
      //=========| Teacher Login Api Call |============
      select === 20 &&
        axios({
          method: "post",
          url: `${dev.url}/api/v1/teachers/login`,
          data: {
            teacherId: id,
            password: password,
          },
        })
          .then((res) => {
            localStorage.setItem("authorization", res.data.token);
            if (res.data.success === true) {
              setIsLoading(false);
              navigate("/");
            }
            //   console.log(res);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsError(err.response.data.errors[0].param);
            setErrorMessage(err.response.data.errors[0].msg);
          });
    }
  };
  return (
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
      <FormControl
        sx={{ width: "210.4px", mb: "10px" }}
        error={select_helperText ? true : false}
      >
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          value={select}
          label="Select"
          onChange={(e) => setSelect(e.target.value)}
        >
          <MenuItem value={10}>Student</MenuItem>
          <MenuItem value={20}>Teacher</MenuItem>
        </Select>
        <FormHelperText>{select_helperText}</FormHelperText>
      </FormControl>
      <TextField
        size="small"
        error={
          isError === "studentId" || isError === "teacherId" ? true : false
        }
        helperText={
          errorMessage && isError !== "password" && errorMessage
          //   (isError === "studentId") | (isError === "teacherId") && errorMessage
        }
        label={select === 10 ? "Student ID" : "Teacher ID"}
        onChange={(e) => setId(e.target.value)}
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
        error={isError === "password" ? true : false}
        helperText={isError === "password" && errorMessage}
        size="small"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
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
      <LoadingButton
        loading={isLoading}
        sx={{
          width: "210.4px",
          color: "otherColor.main",
          backgroundColor: "secondary.main",
          ":hover": { backgroundColor: "secondary.main" },
        }}
        onClick={loginInfoSubmitHandle}
      >
        Submit
      </LoadingButton>
    </Stack>
  );
};

export default Form;
