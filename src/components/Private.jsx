import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Private = (props) => {
  const { Pages } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const authorization = localStorage.getItem("authorization").split(" ")[1];
    const decode = jwtDecode(authorization);
    if (decode.studentId && !decode.teacherId) navigate("/result");
  });
  return <Pages />;
};

export default Private;
