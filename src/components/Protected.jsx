import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Pages } = props;
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const authorization = localStorage.getItem("authorization");
    if (!authorization) navigate("/login");
  });
  return <Pages />;
};

export default Protected;
