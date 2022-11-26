import jwtDecode from "jwt-decode";
import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const authorization = localStorage.getItem("authorization").split(" ")[1];
    const decode = jwtDecode(authorization);
    console.log(decode);
    if (decode.studentId && !decode.teacherId) navigate("/result");
  }, [navigate]);
  return (
    <>
      <h1>Registration</h1>
      <h1>Registration</h1>
      <h1>Registration</h1>
      <h1>Registration</h1>
      <h1>Registration</h1>
      <h1>Registration</h1>
      <h1>Registration</h1>
      <h1>Registration</h1>
      <h1>Registration</h1>
      <h1>Registration</h1>
      <h1>Registration</h1>
    </>
  );
};

export default Registration;
