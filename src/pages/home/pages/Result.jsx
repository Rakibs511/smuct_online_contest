import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHref } from "react-router-dom";
import { setIsNavBarSHow } from "../../shared/actions/themeMoodSlice";

const Result = () => {
  const dispatch = useDispatch();
  const href = useHref();
  useEffect(() => {
    dispatch(setIsNavBarSHow(href));
  }, [dispatch, href]);
  return (
    <div>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
    </div>
  );
};

export default React.memo(Result);
